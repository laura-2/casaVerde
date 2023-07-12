import React from "react";
import "./style.css"
import seta from "../../assets/seta.png"
export default function Card({imagem, titulo, preco}) {
    return (
        <section className="card">
            <div>
                <img src={imagem} alt="planta nova" className="card-imagem"/>
            </div>
            <div>
                <h3 className="card-titulo">{titulo}</h3>
                <p className="card-preco">{preco}</p>
                <p className="card-seta">Comprar <img alt="flecha" src={seta}/></p>
            </div>
        </section>
     );
}