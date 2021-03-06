import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import '../../global.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../service/api';


export default function Logon(){
    const [id, setId] = useState('');

    const history = useHistory();

    async function handerLogon(e){
        e.preventDefault();

        try{
            const response = await api.post('session', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            //alert(`Nome da ONG ${response.data.name}`);
            history.push('/profile');
        }catch(err){
            alert(`Falha no Login, tente novamente`);
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero" /> 
                <form onSubmit={handerLogon}>
                    <h1> Faça seu Logon </h1>
                    <input type="text" placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit"> Entar </button>

                    <Link className='back-link' to="/register"> 
                        <FiLogIn size={16} color="E02041" />
                        Não tenho cadastro 
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes" />
        </div>        
    );
}