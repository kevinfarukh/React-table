import React from "react";
import styled from "styled-components";
import image from "./assets/perfil-foto.png";

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #333;
    color: #fff;
    padding: 30px 0 20px;
    
`
const H2 = styled.h2`
    padding: 0;   
    margin: 10px 0;
`
const Par = styled.p`
    padding: 0;
    margin: 0;
`
const Imagen = styled.img`
    width: 160px;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    margin: 20px auto;
    box-shadow: 0 0 5px gray;
    

`



export default function Footer(){
    return(
        <FooterContainer>
            <H2>Creado por:</H2> 
            <H2>Kevin Farukh Marín Vela</H2>
            <Par>Front and middle developer</Par>
            <Imagen src={image} alt="imagen" />
        </FooterContainer>
    )
}