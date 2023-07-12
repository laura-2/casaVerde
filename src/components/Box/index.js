import React from "react";
import "./style.css"
import Planta from "./../../assets/plant.png"
import Bolinha from "./../../assets/Ellipse.png"
export default function Box() {
    return (
        <div className="box">
            <>
            <img src={Planta} alt="Arvore" className="planta"/>
            </>
            <div className="box-escrita">
                <p className="box-title">Como conseguir <strong className="box-title-strong">minha planta</strong></p>
                <ul className="box-lista">
                    <li><img src={Bolinha} alt="lista" className="bolinha"/>Escolha suas plantas</li>
                    <li><img src={Bolinha} alt="lista" className="bolinha"/>Faça seu pedido</li>
                    <li><img src={Bolinha} alt="lista" className="bolinha"/>Aguarde na sua casa</li>
                </ul>
            </div>
        </div>
     );
}