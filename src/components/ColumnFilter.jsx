import React from "react";
import styled from "styled-components";

const Genero = styled.div`
width:100%;
position: fixed;
top: 155px;
margin: 0 auto;
padding: 0;
left: 0;
right: 0;
`
const Input = styled.input`
padding: 3px;
border: none;
border-radius: 5px;
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
