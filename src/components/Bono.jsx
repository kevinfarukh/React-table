import React from "react";
import styled from "styled-components";

const CuadroGrande = styled.div`
    width: 600px;
    height: 400px;
    background-color: #000;
    position: relative;
    margin: 10px auto;
    @media only screen and (max-width: 668px) {
        width: 300px;
        height: 200px;
    }
    
    
`
const Your = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 240px;
    height: 180px;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(205,22,22,1) 97%); 
    clip-path: polygon(0 0, 100% 0, 47% 94%, 0 93%);
    &:hover{
        opacity: 0.6;
    }
    @media only screen and (max-width: 668px) {
        width: 120px;
        height: 90px;
    }
    
`
const FoamTree = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 240px;
height: 225px;
background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(77,226,18,1) 84%); 
clip-path: polygon(0 0, 46% 1%, 75% 100%, 0% 100%);
&:hover{
    opacity: 0.6;
};
&:focus{
    background-color: #444;
};
@media only screen and (max-width: 668px) {
    width: 120px;
    height: 112px;
}
`
const Visualization = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
margin: 0 auto;
width: 370px;
height: 100%;
background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(23,209,154,1) 65%); 
clip-path: polygon(65% 0, 95% 66%, 63% 100%, 20% 100%, 1% 43%, 36% 0);
&:hover{
    opacity: 0.6;
}
@media only screen and (max-width: 668px) {
    width: 185px;
    height: 100%;
}

    
`
const First = styled.div`
position: absolute;
top: 0;
right: 0;
width: 236px;
height: 262px;
background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(72,22,205,1) 97%); 
clip-path: polygon(0 0, 100% 0, 100% 96%, 47% 100%);
&:hover{
    opacity: 0.6;
};
&:focus{
    border: solid 2px black;
}
@media only screen and (max-width: 668px) {
    width: 118px;
    height: 131px;
}
    
`
const Logo = styled.div`
position: absolute;
bottom: 0;
right: 0;
width: 240px;
height: 139px;
background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(199,213,205,1) 84%); 
clip-path: polygon(47% 6%, 100% 0, 100% 100%, 0 100%);
&:hover{
    opacity: 0.6;
}    
@media only screen and (max-width: 668px) {
    width: 120px;
    height: 68px;
}
`
const YourText = styled.h2`
font-family: "Roboto", sans-serif;
font-size: 2.7rem;
font-weight: 500;
position: absolute;
top: 18px;
left: 55px;
@media only screen and (max-width: 668px) {
    font-size: 1.3rem;
    left: 20px;
}
`
const FoamTreeText = styled.h2`
font-family: "Roboto", sans-serif;
font-size: 1.5rem;
font-weight: 500;
position: absolute;
bottom: 60px;
left: 20px;
@media only screen and (max-width: 668px) {
    font-size: 0.7rem;
    left: 10px;
    bottom: 30px;
}
`

const VisualizationText = styled.h2`
font-family: "Roboto", sans-serif;
font-size: 2.5rem;
font-weight: 400;
position: absolute;
top: 165px;
left: 60px;
@media only screen and (max-width: 668px) {
    font-size: 1.25rem;
    top: 82px;
    left: 30px;
}
`

const FirstText = styled.h2`
font-family: "Roboto", sans-serif;
font-size: 3.7rem;
font-weight: 400;
position: absolute;
top: 40px;
right: 30px;
@media only screen and (max-width: 668px) {
    font-size: 1.8rem;
    right: 15px;
    top: 20px;
}
`



export default function Bono(){


    return(
        <CuadroGrande>
            <Your><YourText>Your</YourText></Your>
            <FoamTree><FoamTreeText>FoamTree</FoamTreeText></FoamTree>
            <Visualization><VisualizationText>Visualization</VisualizationText></Visualization>
            <First><FirstText>First</FirstText></First>
            <Logo></Logo>
        </CuadroGrande>
    )
}