import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Boxhora(dados) {

    const data = Object.values(dados)

    return (
        <Boxhorario>
            <h1>{data[0].weekday} - {data[0].date}</h1>
            <span>
                <Link to={`/assentos/${data[0].showtimes[0].id}`}>
                <Hora>
                    <p>{data[0].showtimes[0].name}</p>
                </Hora>
                </Link>
                <Link to={`/assentos/${data[0].showtimes[1].id}`}>
                <Hora>
                    <p>{data[0].showtimes[1].name}</p>
                </Hora>
                </Link>
            </span>
        </Boxhorario>
    );
}

const Boxhorario = styled.div`
    padding-left: 15%;
    background-color: white;
    h1{
        margin-top: 25px;
        font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    color: #293845;
    }
`
const Hora = styled.button`
    margin-top: 10px;
    margin-right: 8px;
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    p {
        align-self: center;
    font-family: 'Roboto';
    font-size: 18px;
    }
    
`

/* 
*/