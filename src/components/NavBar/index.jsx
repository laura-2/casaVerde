import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import FundoAmarelo from '../../assets/fundo-amarelo.png';
import './style.css';
import Carrinho from '../Carrinho';
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const headerOptions = ['Como fazer', 'Ofertas', 'Novidades', 'Meu carrinho'];
  return (
    <>
      <header className="header" id='home'>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="header-lista">
          {headerOptions.map((option, index) => {
            return (
              <a
                href={`#page-${option[index]}`}
                onClick={option === 'Meu carrinho' ? () => setOpen(!open) : null}
                className="header-lista-link"
                key={index}
              >
                {option}
              </a>
            );
          })}
        </ul>
        <img src={FundoAmarelo} alt="Fundo amarelo" className="header-fundo" />
      </header>
      {open && <Carrinho />}
    </>
  );
}
