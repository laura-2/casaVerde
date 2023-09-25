import React from "react";
import "./styles.css"
import Card from "../Card";
import imagem1 from "../../assets/produto-01 1.png"
import imagem2 from "../../assets/produto-02 1.png"
import imagem3 from "../../assets/produto-03 1.png"
import imagem4 from "../../assets/produto-04 1.png"
import imagem5 from "../../assets/produto-05 1.png"
import imagem6 from "../../assets/produto-06 1.png"

export default function Ofertas() {
    return (
        <section className="ofertas-main" id="page-f">
        <h3 className="ofertas-title">Conheça nossas <br/><strong className="ofertas">ofertas</strong></h3>
        <div className="ofertas-grid">
            <Card imagem={imagem1} titulo="Ajuga reptans" preco="R$ 20,00"/>
            <Card imagem={imagem2} titulo="Cordyline fruticosa" preco="R$ 20,00"/>
            <Card imagem={imagem3} titulo="Crassula ovata" preco="R$ 20,00"/>
            <Card imagem={imagem4} titulo="Cyperus rotundus" preco="R$ 20,00"/>
            <Card imagem={imagem5} titulo="Delairea odorata" preco="R$ 20,00"/>
            <Card imagem={imagem6} titulo="Datura metel" preco="R$ 20,00"/>
        </div>
        </section>
     );
}