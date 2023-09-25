import React, { useState } from "react";
import "./style.css"
import Arvore from "./../../assets/imagem-hero.png"
import emailjs from "@emailjs/browser"
export default function AssinaturaNewsletter() {
    const [email, setEmail] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        if(email !== ""){
        alert("Obrigado por se cadastrar!")
    }

    const templateParams = {
        email: email
    }
    emailjs.send("service_az9jqwj", "template_lh18q2q", templateParams, "crIwd6HoFW1l3Glor")
    .then((response)=>{
        console.log(response.status)
        setEmail('')
    }, (error)=>{
        console.log(error)
    })
}
    return (
        <form className="secao-arvore" id="page-i" onSubmit={handleSubmit}>
        <section className="secao">
            <p className="secao-casa">Sua casa com as<br/><strong className="secao-planta">melhores plantas</strong></p>
            <p className="secao-paragrafo">Encontre aqui uma vasta seleção de plantas para decorar a sua casa 
                e torná-lo uma pessoa mais feliz no seu dia a dia. 
                Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <div className="secao-flex">
                <input className="secao-input" placeholder="pedrosilva@gmail.com" 
                value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <button className="secao-button">Assinar newsletter</button>
            </div>
        </section>
        <img src={Arvore} alt="Arvore" className="arvore"/>
        </form>
     );
}