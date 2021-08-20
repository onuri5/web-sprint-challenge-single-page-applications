import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledReactLink = styled(Link) `
        color: #414a4c;
        background-color: white;
        text-decoration: none;
        text-shadow: 0 0 black;
        padding: 5px 10px;
        margin: 5px;
        border: solid black 1px;
        &:hover {
            background: #414a4c;
            color: #FBFAF5;
        }
    `

    const NavPositioning = styled.nav `
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        border-bottom: solid black 1px;
    `

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

    const ImgContainer = styled.div `
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    `

    const MinorImg = styled.img `
        width: 400px;
        height: auto;
        position: center;
    `

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
            <NavPositioning>
                <h3>Lambda Eats</h3>
                <div>
                    <StyledReactLink  to={'#'}>Home</ StyledReactLink>
                    <StyledReactLink to={'#'}>About</ StyledReactLink>
                </div>
            </NavPositioning>
            < MainImg>
                <h1>Your Favorite Food Delivered While Coding</h1>
                < StyledReactLink to={'/pizza'} id='order-pizza'>Pizza</ StyledReactLink>
            </ MainImg>
            
            <ImgContainer>{props.imgArr.map(img => {
                return <SpecificImg>
                            <MinorImg src={img} alt='Fast Food' />
                            <p>Local food in your area!</p>
                            <p>Wait time: 30-40 minutes</p>
                        </SpecificImg>
            })}</ImgContainer>
        </div>
    )
}

export default HomePage;