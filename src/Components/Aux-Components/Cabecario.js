import React from 'react';
import styled from 'styled-components';

export default function Cabecario() {
    return (
        <Cabeca>
            <h1>CINEFLEX</h1>
        </Cabeca>
    );
}

const Cabeca = styled.div`
width: 100%;
height: 67px;
background-color: #C3CFD9;
display: flex;
align-items: center;
justify-content: center;

    h1 {
        font-family: 'Roboto';
        color: #E8833A;
        font-size: 34px;
    }
`;
