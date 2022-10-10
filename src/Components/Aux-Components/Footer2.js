import React from 'react';
import styled from 'styled-components';

export default function Footer2(){

    return (
        <Progresso>
            <Caixa>
                <img src={"a"} />
            </Caixa>
            <Vertical>
            <Textfilme>
                <p>1</p>
            </Textfilme>
            <Textfilme>
                <p>1 - 1</p>
            </Textfilme>
            </Vertical>
            
        </Progresso>
    );
}


const Progresso = styled.span`
    border: solid;
    border-width: 1px;
    border-color: #9EADBA;
    width: 360px;
    height: 117px;
    padding-left: 15px;
    background-color: #DFE6ED;
    position: fixed;
    bottom: 0px;
    display: flex;
    align-items: center;
`

const Caixa = styled.div`

    height: 88px;
    width: 64px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin: 8px,8px,8px,8px;
        background-color: white;
        width: 48px;
        height: 72px;
    }
`

const Vertical = styled.div`
    display: block;
`

const Textfilme = styled.div`
    width: 100%;
    p {
        margin-left: 20px;
        color: #293845;
        font-size: 26px;
    }
`