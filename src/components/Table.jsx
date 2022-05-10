import React, { useEffect, useMemo, useState } from "react";
import styled from 'styled-components'
import axios from 'axios'
import { useGlobalFilter, useSortBy, useTable} from 'react-table'
import { GlobalFilter } from "./GlobalFilter";
import dataBase from '../components/db.json'
import { ReactPropTypes } from "react";

const Table = styled.table`
color: white;
margin: 0 auto;
border: none;
border-radius: 5px;
box-shadow: 0 0 10px gray;
background-color: #000;
opacity: 0.93;
@media (max-width: 668px) {
    width: 100%;
}

`
const TableHead = styled.thead`
margin: 0 auto;
background-color: #444;
@media (max-width: 668px) {
    @media (max-width: 668px) {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    @media (max-width: 540px) {
        font-size: 0.3rem;s
    }
    @media (max-width: 380px) {
        justify-content: left;
    }
}
`

const TableRow = styled.tr`
border-bottom: 1px solid gray;
@media (max-width: 668px) {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
}
@media (max-width: 540px) {
    font-size: 0.6rem;
    
}
@media (max-width: 380px) {
    justify-content: left;
}
`

const TableHeader = styled.th`
padding: 8px 4px;

`

const TableBody = styled.tbody`


`

const TableData = styled.td`
border-bottom: solid 1px #333;
padding: 5px;

`


export function Products(props) {
    const[products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await axios.get('http://fakestoreapi.com/products').catch(err => console.log(err));

        if(response){
            const products = response.data;

            console.log('Products: ', products);
            setProducts(products);
        }
    };
    
    
    
    const data = useMemo(() => 
        dataBase,[]
    );
    const columns = useMemo(()=>[
        {
            Header: "Id",
            accessor: "id"
        },
        {
            Header: "Song",
            accessor: "song"
        },
        {
            Header: "Artist",
            accessor: "artist"
        },
        {
            Header: "Genre",
            accessor: "genre"
        },
        {
            Header: "Duration",
            accessor: "duration"
        },
        {
            Header: "Available",
            accessor: "available"
        },
        {
            Header: "Price",
            accessor: "price"
        },
        {
            Header: "Amount",
            accessor: "amount"
        }
    ], []);

    const productsData = useMemo(()=>[...products],[products]);
    const productsColumns = useMemo(()=> products[0] ? Object.keys(products[0]).filter((key)=> key !== "rating").map((key)=>{
        if(key === "image")
            return {
                Header: key,
                accessor: key,
                Cell: ({value}) => <img src={value} style={{maxWidth: "50px"}}/>
            }
       return {Header: key, accessor: key } 
    }) :[], [products]);

    const tableHooks = (hooks) =>{
        hooks.visibleColumns.push((columns)=>[
            ...columns,
            
        ])
    }

    const tableInstance = useTable({columns, data},useGlobalFilter, tableHooks, useSortBy );

    const { getTableProps, getTableBodyProps, headerGroups, rows,prepareRow, preGlobalFilteredRows, setGlobalFilter, state } = tableInstance
    
    useEffect(()=>{
        fetchProducts();
        }, [])

    const isEven = (index) => index % 2 === 0;

    return (
    <>  
    <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter}/>
    <Table {...getTableProps()}>
        <TableHead>
            {headerGroups.map((headerGroup)=>(
            <TableRow{...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column)=>(
                <TableHeader{...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
                {column.isSorted ? (column.isSortedDesc ? "  ↓" : " ↑") : ""}
                </TableHeader>
            ))}
            </TableRow>
        ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
        {rows.map((row, index)=>{
            prepareRow(row);

            return <TableRow {...row.getRowProps()} className={isEven(index)? "backgroundColor: #ddd": ""}>

                {row.cells.map((cell, index)=>(
                <TableData{...cell.getCellProps()}>
                {cell.render('Cell')}
                </TableData>
            ))}
            </TableRow>
        })}
        </TableBody>
    </Table>
    </>
    )
}

