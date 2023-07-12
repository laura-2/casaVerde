import React from "react";
import Logo from "../../assets/logo.png";
import FundoAmarelo from "../../assets/fundo-amarelo.png"
import "./style.css";
export default function Menu() {
    return (
        <header className="header">
            <div>
                <img src={Logo} alt="Logo"/>
            </div>
            <ul className="header-lista">
                <a href="http" className="header-lista-link">Como fazer</a>/
                <a href="http" className="header-lista-link">Ofertas</a>/
                <a href="http" className="header-lista-link">Depoimentos</a>/
                <a href="http" className="header-lista-link">Vídeos</a>/
                <a href="http" className="header-lista-link">Meu carrinho</a>
            </ul>
            <img src={FundoAmarelo} alt="Fundo amarelo" className="header-fundo"/>
        </header>
     );
}