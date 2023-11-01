import { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addItemToCart(imagem, titulo, preco) {
    alert('Item adicionado ao carrinho!');
    const itemObject = { imagem, titulo, preco };
    setCart([...cart, itemObject]);
  }

  function removeItemFromCart(clickedItem) {
    const filterCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== clickedItem,
    );
    setCart(filterCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, setCart, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
