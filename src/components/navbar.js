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
    `

    const NavBar = () => {

        return (
            <NavPositioning>
                <h3>Lambda Eats</h3>
                <div>
                    <StyledReactLink  to={'/'} id='order-pizza'>Home</ StyledReactLink>
                    <StyledReactLink to={'#'}>About</ StyledReactLink>
                </div>
            </NavPositioning>
        )
    }

export default NavBar;