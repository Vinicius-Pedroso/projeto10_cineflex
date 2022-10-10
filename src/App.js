import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tela1 from "./Components/Tela1";
import Tela2 from "./Components/Tela2";
import Tela3 from "./Components/Tela3";
import Tela4 from "./Components/Tela4";
import styled from "styled-components";
import { useState } from "react";

export default function App() {

    const [dadosFinais, setDadosFinais] = useState()

    return (
        <Corpo>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Tela1/>} />
                    <Route path="/sessoes/:idFilme" element={<Tela2 />} />
                    <Route path="/assentos/:idSessao" element={<Tela3 setDadosFinais={setDadosFinais}/>} />
                    <Route path="/Sucesso" element={<Tela4 dadosFinais={dadosFinais}/>} />
                </Routes>
        </BrowserRouter>
        </Corpo>

    );
}

const Corpo = styled.div`
    max-width: 375px;
`