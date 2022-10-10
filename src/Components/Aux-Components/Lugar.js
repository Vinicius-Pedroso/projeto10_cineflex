import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

export default function Assento({id, nome, livre, idAssentos, setIdAssentos}) {

    const [escolhido, setEscolhido] = useState(false)

    return (
        <Fileira>
            {livre === false && <Indisponivel onClick={() => {ChamaAlert()}}> <p>{nome}</p> </Indisponivel>}
            {livre === true && escolhido === false && <Lugar onClick={() => { 
                setEscolhido(true)
                 {/*setIdAssentos((idAssentos => [...idAssentos, id]))*/}
                }}> <p>{nome}</p> </Lugar>}
            {livre === true && escolhido === true && <Selecionado onClick={() => { 
                setEscolhido(false)
                {/*this.setIdAssentos({
                    data: this.state.data.filter((_, i) => i !== id)
                  });*/}
                }}> <p>{nome}</p> </Selecionado>}
        </Fileira>
    );
}
//
function ChamaAlert (){
    alert("Esse assento não está disponível")
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
    margin-left: 3px;
    margin-right: 3px;
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
    margin-left: 3px;
    margin-right: 3px;
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
    margin-left: 3px;
    margin-right: 3px;
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