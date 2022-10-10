import React from 'react';
import styled from 'styled-components';

export default function Boxhora(dia, data, horarios) {
    console.log(horarios)
    return (
        <Boxhorario>
            <h1>{dia} - {data}</h1>
            <span>
                <Hora>
                    <p>15h00</p>
                </Hora>
                <Hora>
                    <p>18h40</p>
                </Hora>
            </span>
        </Boxhorario>
    );
}

const Boxhorario = styled.div`
    padding-left: 15%;
    background-color: white;
    h1{
        font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    color: #293845;
    }
`
const Hora = styled.button`
    margin-top: 22px;
    margin-right: 8px;
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    color: white;
    border: none;
    border-radius: 3px;
    p {
        align-self: center;
    font-family: 'Roboto';
    font-size: 18px;
    }
    
`