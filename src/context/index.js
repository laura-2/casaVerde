import { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1)

  function addItemToCart(imagem, titulo, preco) {
    alert('Item adicionado ao carrinho!');
    const itemObject = { imagem, titulo, preco };
    const itemExist = cart.find(item => item.titulo === titulo);
    if (itemExist){
      setCart([...cart])
    } else {
    setCart([...cart, itemObject]);
    }
  }

  function removeItemFromCart(clickedItem) {
    const filterCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== clickedItem,
    );
    setCart(filterCart);
  }
  function countAdd(id){
    const itemExist = cart.find(item => item.id === id);
    if(itemExist){
    setCount(count + 1)
   }
    // const itemExist = cart.find(item => item.id === id);
    // if(itemExist){
    //   setCart(cart.map((item) => item.id === id ? {...itemExist, qty: count + 1} : item))
    // } else {
    //   setCart([...cart, {...id, qty: 1}])
    }

  function countRemove(id){
    const itemExist = cart.find(item => item.id === id);
    if(itemExist){
    setCount(count - 1)
    }
    // const itemExist = cart.find(item => item.id === id);
    // if(itemExist.qty === 1){
    //   setCart(cart.filter((item) => item.id !== id))
    // } else {
    //   setCart(cart.map((item)=> item.id === id ? {...itemExist, qty: itemExist.qty - 1} : item))
    // }
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, count, setCart, addItemToCart, removeItemFromCart, countAdd, countRemove, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
