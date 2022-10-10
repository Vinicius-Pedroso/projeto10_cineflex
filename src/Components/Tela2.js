import Boxhora from "./Aux-Components/BoxHorario";
import Cabecario from "./Aux-Components/Cabecario";
import Selecione from "./Aux-Components/Selecione";
import axios from 'axios';
import { useEffect, useState } from "react";
import Footer from "./Aux-Components/Footer";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Tela2 (){

    const[dadosFilme, setDadosFilme] = useState([])
    const[data, setData] = useState([])
    const params = useParams().idFilme;

    useEffect(() => {
        const PegaDados = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params}/showtimes`)

        PegaDados.then(resposta => {
            setDadosFilme(resposta.data)
            setData(resposta.data.days)
        })
        PegaDados.catch(error => console.log(error))
    }, [])

    if (dadosFilme.lenght === 0){
        return (
            <div>
                <h1>Loading</h1>
            </div>
        );
    }

    return (
        <>
            <Cabecario></Cabecario>
            <Selecione text="o horário"></Selecione>
            {data.map(days => (
                <Boxhora props={days} key={days.id}></Boxhora>
            ))}
            <Caixabranca></Caixabranca>
            <Footer imgURL={dadosFilme.posterURL} titulo={dadosFilme.title}> </Footer>
        </>
    );
}

const Caixabranca = styled.div`
    height: 147px;
    width: 100hv;
`
