import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Footer2(idfilme){

    const idAxios = Object.values(idfilme)
    const [footerInfo, setFooterInfo] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)
        const PegaDados = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idAxios}/seats`)

        PegaDados.then(response => {
            setFooterInfo(response.data)
            setLoading(false)
        })
        PegaDados.catch(error => console.log(error))
    }, [])

    if (loading === true){
        return (
            <div>
                <h1>Loading</h1>
            </div>
        );
    }

    return (
        <Progresso>
            <Caixa>
                <img src={footerInfo.movie.posterURL} />
            </Caixa>
            <Vertical>
            <Textfilme>
                <p>{footerInfo.movie.title}</p>
            </Textfilme>
            <Textfilme>
                <p>{footerInfo.day.weekday} - {footerInfo.day.date}</p>
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