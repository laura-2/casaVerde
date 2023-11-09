import React, { useContext } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import "./style.css";
import { CartContext } from "../../context";
export default function Conta({closeModal}) {
    const {acao, setEmail, setSenha, setAcao, handleSubmit} = useContext(CartContext)
  
  return (
    <section className="modal-conta" id="page-">
    <CloseRoundedIcon className="icon-close" onClick={closeModal}/>
      <h1 className="conta-titulo">Minha conta</h1>
      <form className="conta-form" onSubmit={handleSubmit}>
        <section className="conta-radio">
          <p><strong>O que você quer fazer?</strong></p>
          <label>
            <input
              type="radio"
              value="registro"
              checked={acao === "registro"}
              onChange={(e) => setAcao(e.target.value)}
            />
            Cadastrar email
          </label>
          <label>
            <input
              type="radio"
              value="logar"
              checked={acao === "logar"}
              onChange={(e) => setAcao(e.target.value)}
            />
            Entrar na minha conta
          </label>
        </section>
        <div className="conta-input">
          <label className="titulo-input" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="espaco-input"
            placeholder="joaosilva@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="conta-input">
          <label className="titulo-input" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="espaco-input"
            placeholder="*******"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <section className="conta-botoes">
        <button className="conta-botao-cancelar" onClick={closeModal}>
          Cancelar
        </button>
        <button className="conta-botao" type="submit">
          Salvar
        </button>
        </section>
      </form>
    </section>
  );
}
