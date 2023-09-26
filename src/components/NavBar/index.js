import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import FundoAmarelo from "../../assets/fundo-amarelo.png"
import "./style.css";
import Carrinho from "../Carrinho";
export default function NavBar() {
    const [open, setOpen] = useState(false)
    const headerOptions = ['Como fazer', 'Ofertas', 'Depoimentos', 'Novidades']
    return (
        <>
        <header className="header">
            <div>
                <img src={Logo} alt="Logo"/>
            </div>
            <ul className="header-lista">
                {headerOptions.map((option, index)=>{
                    return <a href={`#page-${option[index]}`} className="header-lista-link" key={index}>{option}</a>
                })}
            </ul>
            <button className="carrinho-link" onClick={()=> setOpen(!open)}>Meu Carrinho</button>
            <img src={FundoAmarelo} alt="Fundo amarelo" className="header-fundo"/>

        </header>
        {open && <Carrinho/>}
        </>
     );
}