import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import NavBar from './components/navbar'


    // Styling the banner image at the top
    const MainImg = styled.div `
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        color: white;
        text-shadow: 5px 1px black;
        background-image: url('https://images.unsplash.com/photo-1572829329047-dce11ac5aaab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
        background-position: center;
        height: 50vh;
    `
    
    // Spacing and orienting the smaller images
    const ImgContainer = styled.div `
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    `

    // Sizing the smaller images
    const MinorImg = styled.img `
        width: 400px;
        height: auto;
    `

    // Setting up the image to have text underneath itself
    const SpecificImg = styled.div `
        padding: 20px;
        margin: 20px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    `


const HomePage = (props) => {

    return (
        <div>
            <NavBar />
            < MainImg>
                <h1>Your Favorite Food Delivered While Coding</h1>
                <Link to={'/pizza'}><button id='order-pizza'>Pizza?</button></ Link>
            </ MainImg>
            
            <ImgContainer>{props.imgArr.map((img, index) => {
                return <SpecificImg>
                            <MinorImg src={img} alt='Fast Food' key={index}/>
                            <p>Local food in your area!</p>
                            <p>Wait time: 30-40 minutes</p>
                        </SpecificImg>
            })}</ImgContainer>
        </div>
    )
}

export default HomePage;