import React, { useContext, useState } from 'react';
import Logo from '../../assets/logo.png';
import FundoAmarelo from '../../assets/fundo-amarelo.png';
import './style.css';
import Carrinho from '../Carrinho';
import { CartContext } from '../../context';
export default function NavBar() {
  const { cart } = useContext(CartContext);
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
              <span key={index}>
              <a
                href={`#page-${option[index]}`}
                onClick={option === 'Meu carrinho' ? () => setOpen(!open) : null}
                className="header-lista-link"
                key={index}
              >
                {option}
              </a>
              {option === 'Meu carrinho' ? 
              <p className='cart-tamanho'>{cart.length > 0 ? cart.length : null}</p> : null}
              </span>
            );
          })}
        </ul>
        <img src={FundoAmarelo} alt="Fundo amarelo" className="header-fundo" />
      </header>
      {open && <Carrinho />}
    </>
  );
}
