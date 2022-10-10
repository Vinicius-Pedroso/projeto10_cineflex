import React from 'react';
import styled from 'styled-components';

export default function Selecione(props) {
    return (
        <Boxfilme>
            <p>Selecione {props.text}</p>
        </Boxfilme>
    );
}

const Boxfilme = styled.div`
    height: 80px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 24px;
        color: #293845;
    }
    
`