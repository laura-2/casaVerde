import React, { useContext} from 'react';
import { CartContext } from '../../context';
import Card from '../Card';
import './style.css';
import remover from '../../assets/remove.png';
export default function Carrinho() {
  const { cart, clearCart, removeItemFromCart } = useContext(CartContext);

  return (
    <section className="modal-carrinho" id="page-c">
      {cart.length > 0 ? (
        <button onClick={() => clearCart()} className="limpar">
          Limpar carrinho
        </button>
      ) : (
        <p style={{ textAlign: 'center'}}>Seu carrinho está vazio!</p>
      )}
      {cart.map((cartItem, index) => {
        return (
          <Card
            key={cartItem.id}
            itemIndex={index}
            imagem={cartItem.imagem}
            titulo={cartItem.titulo}
            preco={cartItem.preco}
            marca="Remover"
            toCart={() => removeItemFromCart(index)}
            icone={remover}
            cardWidth="cart"
            cardTitle="cart-title"
            cardPrice="cart-price"
          />
        );
      })}
    </section>
  );
}
