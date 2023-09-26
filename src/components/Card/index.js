import React from "react";
import "./style.css"

export default function Card({imagem, titulo, preco, marca, toCart, icone}) {
    return (
        <section className="card">
            <div>
                <img src={imagem} alt="planta nova" className="card-imagem"/>
            </div>
            <div>
                <h3 className="card-titulo">{titulo}</h3>
                <p className="card-preco">{preco}</p>
                <button onClick={toCart} className="card-seta">{marca} <img alt="flecha" src={icone}/></button>
            </div>
        </section>
     );
}