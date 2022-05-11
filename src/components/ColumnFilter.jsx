import React from "react";
import styled from "styled-components";

const Genero = styled.div`
width:100%;

margin: 0 auto;
padding: 0;


`
const Input = styled.input`
padding: 3px;
border: none;
border-radius: 5px;
position: absolute;
z-index: 100;
top: -35px;
left: -60px;
border: 1px solid #fff;
@media (max-width: 720px) {
    left: -20px;
}
@media (max-width: 668px) {
        left: 10px;
}
@media (max-width: 540px) {
    left: -10px; 
}
`

export const ColumnFilter = ({ column }) =>{
    const { filterValue, setFilter } = column
    return (
        <Genero>
            <Input 
            value={filterValue || ""}
            onChange={e => setFilter(e.target.value)}
            placeholder="Buscar por género"
            />
        </Genero>
    )
}
