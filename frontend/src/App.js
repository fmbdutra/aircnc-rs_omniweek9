import React from 'react';
import './App.css';
import api from './services/api';

import logo from './assets/logo.svg';

function App() {
  function handleSubmit(event) {
    event.preventDefault();

    // document.querySelector('input#email'); assim no JS, mas nao no React
    

    console.log('Hello World');
  }

  return (
    <div className="container">
      <img src={logo} alt="aircnc"/>
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
         <label htmlFor="email">Email * </label>
         <input 
            id="email" 
            type="email" 
            placeholder="Seu melhor email"
         /> 

         <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    
    
    </div>


  );
}

export default App;
