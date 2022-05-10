import React,{useState} from "react";
import { useAsyncDebounce } from "react-table";
import styled from "styled-components"; 

const SearchContainer = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`
const SearchText = styled.h2`
    text: gray;
    
`
const Input = styled.input`
 margin: 105px 0 auto;
 height: 10px;
 width: 340px;
 border: 1px solid gray;
 border-radius: 10px;
 outline: none;
 padding: 10px;
`
export function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter
}){
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 300);

    return <SearchContainer>
        
        <Input value={value || ""} onChange={(e)=>{
            setValue(e.target.value);
            onChange(e.target.value);
        }} placeholder={`🔎 Busca entre estas ${count} canciones... `}/>
    </SearchContainer>
}