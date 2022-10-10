import React from 'react';
import styled from 'styled-components';
import Cabecario from './Aux-Components/Cabecario';
import { Link } from 'react-router-dom';

export default function Tela4() {
    return (
        <>
            <Cabecario></Cabecario>
            <Layout>
            
            <Boxfilme>
                <p>
                    Pedido feito com sucesso
                </p>
            </Boxfilme>
            <h1>Filme e sessão</h1>
            <h2>Filmi du Kafé</h2>
            <h3>xx/yy/zzzz</h3>
            <h1>Ingressos</h1>
            <h2>Assento 1</h2>
            <h3>Assento 50</h3>
            <h1>Comprador</h1>
            <h2>Bob o bobo</h2>
            <h3>cpf: 5151 6969 51</h3>
        </Layout>
        <Link to="/">
            <Botao><p>Voltar para a home</p></Botao>
        </Link>
        </>
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
        font-size: 24px;
        color: #247A6B;
        font-weight: 700;
        text-decoration: none;
    }
`

const Layout = styled.div`
    
    h1 {
        font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;
    color: #293845;
    margin-bottom: 15px;
    margin-left: 28px;
    }

    h2 {
        font-family: 'Roboto';
    font-size: 22px;
    font-weight: 400;
    color: #293845;
    margin-bottom: 2px;
    margin-left: 28px;
    }

    h3 {
        font-family: 'Roboto';
    font-size: 22px;
    font-weight: 400;
    color: #293845;
    margin-bottom: 35px;
    margin-left: 28px;
    }
`

const Botao = styled.button`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-right: 8px;
    margin-left: 50px;
    margin-bottom: 40px;
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