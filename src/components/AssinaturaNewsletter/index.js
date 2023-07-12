import React from "react";
import "./style.css"
import Arvore from "./../../assets/imagem-hero.png"
export default function AssinaturaNewsletter() {
    return (
        <div className="secao-arvore">
        <section className="secao">
            <p className="secao-casa">Sua casa com as</p>
            <h1 className="secao-planta">melhores plantas</h1>
            <p className="secao-paragrafo">Encontre aqui uma vasta seleção de plantas para decorar a sua casa 
                e torná-lo uma pessoa mais feliz no seu dia a dia. 
                Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <div className="secao-flex">
                <input className="secao-input" placeholder="Insira seu email"/>
                <button className="secao-button" >Assinar newsletter</button>
            </div>
        </section>
        <img src={Arvore} alt="Arvore" className="arvore"/>
        </div>
     );
}