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
                    <FilmeBox key={filme.id}>
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
    background-color: white;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center; 
`

const FilmeBox = styled.div`
    height: 209px;
    width: 145px;
    margin-bottom: 11px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    img {
        margin: 8px,8px,8px,8px;
        background-color: white;
        width: 129px;
        height: 193px;
    }

`