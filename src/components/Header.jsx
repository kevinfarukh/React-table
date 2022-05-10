import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #444;
    position: fixed;
    height: 105px;
    width: 100%;
    padding: 0;
    margin: 0;
    top: 0;
    color: #fff;
`
const H1 = styled.h1`
    padding: 10px;
    margin: 0;
    @media (max-width: 490px) {
        font-size: 1.5rem;
    }
`
const Par = styled.p`
    padding: 0;
    margin: 0;
`
const Flecha = styled.h3`
    padding: 0;
    margin: 0;
    
`


export default function Header(){
    return(
        <HeaderContainer>
            <H1>Tienda musical Tulipan</H1>
            <Par>Toda la música la encuentras aquí</Par>
            <Flecha>↓</Flecha>

        </HeaderContainer>
    )
}