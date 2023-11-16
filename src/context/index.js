import { createContext, useState } from 'react';
import axios from "axios";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [acao, setAcao] = useState("registro");

  function handleSubmit(e) {
    e.preventDefault();
      axios
        .post("http://localhost:8081/usuarios", { email, senha, acao })
        .then((res) => alert(acao === "registro" ? "Email cadastrado com sucesso! Boas compras" :
            "Logado com sucesso! Boas compras"))
        .catch((err) => alert(acao === "registro" || senha === "" ? "Preencha todos os campos corretamente!" : "Email não encontrado!"));
        console.log(email, senha, acao)
  }


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


  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ email, setEmail, senha, setSenha, setAcao, acao, handleSubmit, cart, setCart, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
