import React, { useMemo } from "react";
import styled from 'styled-components'
import { useGlobalFilter, useFilters, useSortBy, useTable} from 'react-table'
import { GlobalFilter } from "./GlobalFilter";
import dataBase from '../components/db.json'
import { ColumnFilter } from "./ColumnFilter";

const Table = styled.table`
color: white;
margin: 30px auto;
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
    
    const data = useMemo(() => 
        dataBase,[]
    );
    const columns = useMemo(()=>[
        {
            Header: "Id",
            accessor: "id",
            Filter: ColumnFilter,
            disableFilters: true
        },
        {
            Header: "Canción",
            accessor: "song",
            Filter: ColumnFilter,
            disableFilters: true
        },
        {
            Header: "Artista",
            accessor: "artist",
            Filter: ColumnFilter,
            disableFilters: true
        },
        {
            Header: "Género",
            accessor: "genre",
            Filter: ColumnFilter,
        },
        {
            Header: "Duración",
            accessor: "duration",
            Filter: ColumnFilter,
            disableFilters: true
        },
        {
            Header: "Disponible",
            accessor: "available",
            Filter: ColumnFilter,
            disableFilters: true
        },
        {
            Header: "Precio",
            accessor: "price",
            Filter: ColumnFilter,
            disableFilters: true
        },
        {
            Header: "Cantidad",
            accessor: "amount",
            Filter: ColumnFilter,
            disableFilters: true
            
        }
    ], []);


    const tableInstance = useTable({columns, data}, useFilters, useGlobalFilter, useSortBy );

    const { getTableProps, getTableBodyProps, headerGroups, rows,prepareRow, preGlobalFilteredRows, setGlobalFilter, state } = tableInstance
    

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
                <div>{column.canFilter ? column.render('Filter'): null}</div>
                </TableHeader>
            ))}
            </TableRow>
        ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
        {rows.map((row, index)=>{
            prepareRow(row);

            return <TableRow {...row.getRowProps()} style={isEven(index)? {backgroundColor: "#222"} :{backgroundColor:"#000"}}>

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

