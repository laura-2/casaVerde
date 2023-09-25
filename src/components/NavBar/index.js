import React from "react";
import Logo from "../../assets/logo.png";
import FundoAmarelo from "../../assets/fundo-amarelo.png"
import "./style.css";
export default function NavBar() {

    const headerOptions = ['Como fazer', 'Ofertas', 'Depoimentos', 'Novidades', 'Meu carrinho']
    return (
        <header className="header">
            <div>
                <img src={Logo} alt="Logo"/>
            </div>
            <ul className="header-lista">
                {headerOptions.map((option, index)=>{
                    return <a href={`#page-${option[index]}`} className="header-lista-link" key={index}>{option}</a>
                })}
            </ul>
            <img src={FundoAmarelo} alt="Fundo amarelo" className="header-fundo"/>
        </header>
     );
}