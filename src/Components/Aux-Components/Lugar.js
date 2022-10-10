import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

export default function Assento({id, nome, livre}) {

    console.log(id)

    return (
        <Fileira>
            {!livre ? (
                <Indisponivel>
                    <p>{nome}</p>
                </Indisponivel>
            ) : (
                <Lugar>
                    <p>{nome}</p>
                </Lugar>
            )}
            
        </Fileira>
    );
}

const Fileira = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`

const Lugar = styled.div`
    width: 26px;
    height: 26px;
    margin-left: 4px;
    margin-right: 4px;
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

const Selecionado = styled.div`
    width: 26px;
    height: 26px;
    margin-left: 4px;
    margin-right: 4px;
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

const Indisponivel = styled.div`
    width: 26px;
    height: 26px;
    margin-left: 4px;
    margin-right: 4px;
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