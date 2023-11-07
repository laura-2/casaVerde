import React, { useState } from 'react';
import './style.css';

export default function Card({ imagem, titulo, preco, marca, toCart, icone, cardWidth, cardTitle, cardPrice, botoesHidden}) {
  const [count, setCount] = useState(1)
  return (
    <section className="card">
      <div>
        <img src={imagem} alt="planta nova" className={cardWidth} />
      </div>
      <div>
        <h3 className={`card-titulo ${cardTitle}`}>{titulo}</h3>
        <p className={`card-preco ${cardPrice}`}>R$ {preco}</p>
        <button onClick={toCart} className="card-seta">
          {marca} <img alt="flecha" src={icone} />
        </button>
        <div className={`botoes ${botoesHidden}`}>
          <p>Quantidade: </p>
        <button className="botaoContador" onClick={()=> setCount(count -1)}>-</button>
            <p>{count > 0 ? count : 1}</p>
            <button className="botaoContador" onClick={()=> setCount(count +1)}>+</button>
            </div>
      </div>
    </section>
  );
}
