import React from 'react';

import './styles.css';

export default function Header(){
    return (
        <header>
            <div className='header-opaque'>
                <h1 className='title'>Check-IA</h1>
                <p className='subtitle'>Descubra qual será seu próximo destino de viagem de acordo com o seu perfil</p>
            </div>
        </header>
    )
}