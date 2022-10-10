import React from 'react';
import styled from 'styled-components';

export default function Assento() {
    return (
        <Fileira>
            <Lugar>
                <p>1</p>
            </Lugar>
        </Fileira>
    );
}

const Fileira = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Lugar = styled.div`
    width: 26px;
    height: 26px;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-size: 11px;
    }
`

const selecionado = styled.div`
    width: 26px;
    height: 26px;
    background-color: #8DD7CF;
    border: 1px solid;
    border-color: #1AAE9E;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-size: 11px;
    }
`

const indisponivel = styled.div`
    width: 26px;
    height: 26px;
    border: 1px solid;
    background-color: #FBE192;
    border-color: #F7C52B;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-size: 11px;
    }
`