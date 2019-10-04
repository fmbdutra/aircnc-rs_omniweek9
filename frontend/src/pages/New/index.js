import React, { useState } from 'react';
import camera from '../../assets/camera.svg';
import './styles.css';

export default function New(){
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [prince, setPrice] = useState('');
    function handleSubmit(){

    }
    return (
        <form onSubmit={handleSubmit}>
            <label id="thumbnail">
                <input type="file" />
                <img src={camera} alt="Select imagem"  />
            </label>
            <label htmlFor="company">EMPRESA *</label>
            <input
                id="company"
                placeholder="Sua empresa  incrível"
                value = { company }
                onChange={event => setCompany(event.target.value)}
            />
            <label htmlFor="techs">TECNOLOGIAS * <span>(separados por vírgula)</span> </label>
            <input
                id="techs"
                placeholder="Quais tecnologias usam"
                value = { techs }
                onChange={event => setTechs(event.target.value)}
            />
            <label htmlFor="prince">VALOR DA DIÁRIA * <span>(caso gratuíto, deixe em branco)</span> </label>
            <input
                id="prince"
                placeholder="Valor cobrado por dia"
                value = { prince }
                onChange={event => setPrice(event.target.value)}
            />

            <button className="btn">Cadastrar</button>
        </form>
    )
}