import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #333;
    color: #fff;
    padding: 30px;
    
`
const H2 = styled.h2`
    
`
const Par = styled.p`
    padding: 0;
    margin: 0;
`



export default function Footer(){
    return(
        <FooterContainer>
            <H2>Creado por Kevin Farukh Marín Vela</H2>
            <Par>Front and middle developer</Par>

        </FooterContainer>
    )
}