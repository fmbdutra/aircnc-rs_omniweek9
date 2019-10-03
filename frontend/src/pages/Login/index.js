import React, { useState } from 'react';
import api from '../../services/api';

export default function Login(){
    const [email, setEmail] = useState('');
    
    async function handleSubmit(event) {
      event.preventDefault();
      // document.querySelector('input#email'); assim no JS, mas nao no React
      // console.log(email); // Teste
      const response = await api.post('/sessions', { email });
      const { _id } = response.data;
          
      localStorage.setItem('user', _id);    
    }
  
    // function handleEmailChange(event){
    //   event => setEmail(event.target.value);
    // }
    // Esta dentro do form, dentro do onChange
    
    return (
        <>
            <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email * </label>
            <input 
                id="email" 
                type="email" 
                placeholder="Seu melhor email"
                value ={email}
                onChange={event => setEmail(event.target.value)}
            /> 

            <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    );
}