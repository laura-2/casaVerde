import React from "react";
import "./style.css"
import Planta from "./../../assets/plant.png"
import Bolinha from "./../../assets/Ellipse.png"
export default function Box() {

    const boxList = ['Escolha suas plantas', 'Faça seu pedido', 'Aguarde na sua casa']
    return (
        <div className="box" id="page-C">
            <img src={Planta} alt="Arvore" className="planta"/>
            <div className="box-escrita">
                <p className="box-title">Como conseguir <strong className="box-title-strong">minha planta</strong></p>

                    {boxList.map((list, index)=>{
                        return <div className="box-lista" key={index}>
                            <img src={Bolinha} alt="lista" className="bolinha"/>
                            <li className="lista">{list}</li>
                            </div>
                    })}
            </div>
        </div>
     );
}