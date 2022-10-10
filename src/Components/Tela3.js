import React from 'react';
import Footer2 from './Aux-Components/Footer2';
import Legendas from './Aux-Components/Legenda';
import Assento from './Aux-Components/Lugar';
import Selecione from './Aux-Components/Selecione';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cabecario from './Aux-Components/Cabecario';

export default function Tela3 (){
    
    const params = useParams().idSessao
    const [dados, setDados] = useState([])

    useEffect(() => {
        const PegaDados = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params}/seats`)

        PegaDados.then(response => {
            setDados(response.data.seats)
        })
        PegaDados.catch(error => console.log(error))
    }, [])

    if (dados.lenght === 0){
        return (
            <div>
                <h1>Loading</h1>
            </div>
        );
    }

    console.log(dados)

    return (
        <>
            <Cabecario></Cabecario>
            <Selecione text="o(s) assento(s)"></Selecione>
            <Sequencia>
            {dados.map(lugar => (
                <Assento id={lugar.id} nome={lugar.name} livre={lugar.isAvailable}></Assento>
            ))}
            </Sequencia>
            <Legendas></Legendas>
            <Footer2></Footer2>
        </>
    );
}

const Sequencia = styled.div`
    display: flex;
    flex-wrap: wrap;
`