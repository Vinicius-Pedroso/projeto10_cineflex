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
import { Link } from 'react-router-dom';

export default function Tela3 (){
    
    const params = useParams().idSessao
    const [dados, setDados] = useState([])
    const [nome, setNome] = useState()
    const [cpf, setCpf] = useState()

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

    return (
        <>
            <Cabecario></Cabecario>
            <Selecione text="o(s) assento(s)"></Selecione>
            <Sequencia>
            {dados.map(lugar => (
                <Assento id={lugar.id} nome={lugar.name} livre={lugar.isAvailable} key={lugar.id}></Assento>
            ))}
            </Sequencia>
            <Legendas></Legendas>
            <Ajuste>
            <Request><h1>Nome do comprador:</h1></Request>
            <Boxinfo type="text" placeholder="Digite seu nome" value={nome} onChange={e => setNome(e.target.value)} >
            </Boxinfo>
            <Request><h1>CPF do comprador:</h1></Request>
            <Boxinfo input type="text" placeholder="Digite seu CPF" value={cpf} onChange={e => setCpf(e.target.value)}>
            </Boxinfo>
            <Link to="/sucesso">
            <Botao><p>Reservar assento(s)</p></Botao>
            </Link>
            </Ajuste>
            <Caixabranca></Caixabranca>
            <Footer2></Footer2>
        </>
    );
}

const Sequencia = styled.div`
    padding-left: 10px;
    width: 350px;
    display: flex;
    flex-wrap: wrap;
`

const Boxinfo = styled.input`
    height: 51px;
    width: 327px;
    display: block;
    margin-top: 3px;
    border: 1px solid #D4D4D4;
    border-radius: 3px;
    ::placeholder {
        font-family: Roboto;
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        color: #AFAFAF;
}
`
const Request = styled.div`
    padding-top: 10px;
    h1 {
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        color: #293845;
}
`

const Botao = styled.button`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-right: 8px;
    margin-left: 50px;
    width: 225px;
    height: 42px;
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
const Caixabranca = styled.div`
    height: 147px;
    width: 100hv;
`
const Ajuste = styled.div `
    padding-top: 20px;
    padding-left: 5%;
`