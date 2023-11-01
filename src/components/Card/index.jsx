import React from 'react';
import './style.css';

export default function Card({ imagem, titulo, preco, marca, toCart, icone, cardWidth, cardTitle, cardPrice}) {
  return (
    <section className="card">
      <div>
        <img src={imagem} alt="planta nova" className={cardWidth} />
      </div>
      <div>
        <h3 className={`card-titulo ${cardTitle}`}>{titulo}</h3>
        <p className={`card-preco ${cardPrice}`}>{preco}</p>
        <button onClick={toCart} className="card-seta">
          {marca} <img alt="flecha" src={icone} />
        </button>
      </div>
    </section>
  );
}
