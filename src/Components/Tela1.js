import { Link } from "react-router-dom";
import Cabecario from "./Aux-Components/Cabecario";
import Selecione from "./Aux-Components/Selecione";
import axios from 'axios';
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Tela1() {

    const[filmes, setFilmes] = useState([])

    useEffect(() => {
        const PegaFilme = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
    
    
        PegaFilme.then(resposta => setFilmes(resposta.data))
        PegaFilme.catch(error => console.log(error))
    }, [])

    if (filmes.lenght === 0){
        return (
            <div>
                <h1>Loading</h1>
            </div>
        );
    }

    return (
        <>
            <Cabecario></Cabecario>
            <Selecione text="o filme"></Selecione>
            <ArranjoFilmes>
                {filmes.map(filme => (
                    <FilmeBox>
                        <Link to={`/sessoes/${filme.id}`}>
                            <img src={filme.posterURL} />
                        </Link>
                    </FilmeBox>
                ))   }
            </ArranjoFilmes>
        </>
    );
}

const ArranjoFilmes = styled.div`
    background-color: #E5E5E5;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; 

    img {
        width: 40%;
    }
`

const FilmeBox = styled.div`
    border: 18px;
    border-color: black;
`