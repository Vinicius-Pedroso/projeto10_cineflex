import Boxhora from "./Aux-Components/BoxHorario";
import Cabecario from "./Aux-Components/Cabecario";
import Selecione from "./Aux-Components/Selecione";
import axios from 'axios';
import { useEffect, useState } from "react";
import Footer from "./Aux-Components/Footer";
import { useParams } from "react-router-dom";

export default function Tela2 (){

    const[dadosFilme, setDadosFilme] = useState([])
    const params = useParams().idFilme;

    useEffect(() => {
        const PegaDados = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params}/showtimes`)

        PegaDados.then(resposta => setDadosFilme(resposta.data))
        PegaDados.catch(error => console.log(error))
    }, [])

    if (dadosFilme.lenght === 0){
        return (
            <div>
                <h1>Loading</h1>
            </div>
        );
    }

    console.log(dadosFilme);

    return (
        <>
            <Cabecario></Cabecario>
            <Selecione text="o horário"></Selecione>
            {dadosFilme.map(sessao => (
                <Boxhora dia={sessao.days.weekday} data={sessao.days.date} horarios={sessao.days.showtime}>
                </Boxhora>
            ))  }

            <Boxhora></Boxhora>
            <Footer imgURL={dadosFilme.posterURL} titulo={dadosFilme.title}> </Footer>
        </>
    );
}