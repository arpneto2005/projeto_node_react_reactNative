import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import logoImg from '../../assets/logo.svg';
import api from '../../service/api';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setwhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {name, email, whatsapp, city, uf};

        try{
            console.log(data);
            const response = await api.post('ongs', data);
            console.log(response);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        }catch{
            alert(`Erro ao cadastrar sua ONG ${data.name}, tente novamente.`);
        }

    }

    return (
        <div className='register-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='Be the Hero' />
                    <h1> Cadastro </h1>
                    <p>
                        Fala seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.
                    </p>
                    <Link className='back-link' to="/"> 
                        <FiArrowLeft size={16} color="E02041" />
                        Não tenho cadastro 
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input type='text' placeholder='Nome da ONG' value={name} onChange={e => setName(e.target.value)} />
                    <input type='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                    <input type='text' placeholder='WhtasApp' value={whatsapp} onChange={e => setwhatsapp(e.target.value)} />
                    <div className='input-group'>
                        <input type='text' placeholder='Cidade' value={city} onChange={e => setCity(e.target.value)} />
                        <input type='text' placeholder='UF' style={{width: 80}} value={uf} onChange={e => setUf(e.target.value)} />
                    </div>
                    <button className='button' type='submit'> Cadastrar </button>
                </form>
            </div>
        </div>
    );
}