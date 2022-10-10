import React from 'react';
import Footer from './Aux-Components/Footer';
import Legendas from './Aux-Components/Legenda';
import Assento from './Aux-Components/Lugar';
import Selecione from './Aux-Components/Selecione';

export default function Tela3 (){
    
    return (
        <>
            <Selecione text="o(s) assento(s)"></Selecione>
            <Assento></Assento>
            <Legendas></Legendas>
            <Footer></Footer>
        </>
    );
}