import React, { useContext } from 'react';
import './styles.css';
import Card from '../Card';
import listOfItems from '../../item';
import { CartContext } from '../../context';
import seta from '../../assets/seta.png';

export default function Ofertas() {
  const { addItemToCart, count, countAdd, countRemove } = useContext(CartContext);
  return (
    <section className="ofertas-main" id="page-f">
      <h3 className="ofertas-title">
        Conheça nossas <br />
        <strong className="ofertas">ofertas</strong>
      </h3>
      <div className="ofertas-grid">
        {listOfItems.map((cartItem, index) => {
          return (
            <Card
              key={index}
              itemIndex={index}
              imagem={cartItem.imagem}
              titulo={cartItem.titulo}
              preco={cartItem.preco}
              marca="Comprar"
              toCart={() =>
                addItemToCart(cartItem.imagem, cartItem.titulo, cartItem.preco)
              }
              icone={seta}
              cardWidth="card-imagem"
              cardTitle="estilo-oferta-titulo"
              cardPrice="estilo-oferta-preco"
            />
          );
        })}
      </div>
    </section>
  );
}
