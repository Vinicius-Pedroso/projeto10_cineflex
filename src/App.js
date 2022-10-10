import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tela1 from "./Components/Tela1";
import Tela2 from "./Components/Tela2";
import Tela3 from "./Components/Tela3";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Tela1/>} />
                <Route path="/sessoes/:idFilme" element={<Tela2 />} />
                <Route path="/assentos/:idSessao" element={<Tela3/>} />
            </Routes>
        </BrowserRouter>
    );
}