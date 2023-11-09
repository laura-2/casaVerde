import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
export default function Conta() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:8081/usuarios', {email, senha})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

  return (
    <section className="modal-conta" id="page-">
        <h1 className='conta-titulo'>Minha conta</h1>
        <form className='conta-form' onSubmit={handleSubmit}>
            <div className="conta-input">
                <label className="titulo-input" htmlFor='email'>Email</label>
                <input type="email" name="email" id="email" className="espaco-input" placeholder='joaosilva@gmail.com'
                 onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="conta-input">
                <label className="titulo-input" htmlFor='password'>Senha</label>
                <input type="password" name='password' id='password' className="espaco-input" placeholder='*******'
                 onChange={e => setSenha(e.target.value)} />
            </div>
            <button className='conta-botao'>Salvar</button>
        </form>
    </section>
  );
}
