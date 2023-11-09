import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.png";
import FundoAmarelo from "../../assets/fundo-amarelo.png";
import "./style.css";
import Carrinho from "../Carrinho";
import { CartContext } from "../../context";
import Conta from "../Conta";
export default function NavBar() {
  const { cart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [conta, setConta] = useState(false);
  const headerOptions = ["Como fazer", "Ofertas", "Novidades", "Meu carrinho", "Minha conta"];
  return (
    <header className="header" id="home">
      <img src={Logo} alt="Logo"/>

      <ul className="header-lista">
        {headerOptions.map((option, index) => {
          return (
            <a
              href={`#page-${option[index]}`}
              onClick={option === "Meu carrinho" ? () => setOpen(!open) : null ||
              option === "Minha conta" ? () => setConta(!conta) : null}
              className="header-lista-link"
              key={index}
            >
              {option} 
              {option === "Meu carrinho" ? (cart.length > 0 ? `(${cart.length})` : null) : null}
            </a>
          );
        })}
      </ul>
      <img src={FundoAmarelo} alt="Fundo amarelo" className="header-fundo" />
      {open && <Carrinho />}
      {conta && <Conta/>}
    </header>
  );
}
