import React from 'react';
import './Tela-Download.css';

import Logo from './img/logo.svg';
import Mockup from './img/mockup.png';

export default function TelaDownload() {
    return (
        <div className="container-tela-download">

            <div className="section-1">

                <div className="menu-container">
                    <img src={Logo} />

                    <div className="menu">
                        <h1>Baixar</h1>
                        <h1>Sobre</h1>
                        <h1>Contato</h1>
                    </div>

                </div>

                <div className="slogan-container">
                    <h1>Tecnologia + Esportes = imovim</h1>
                    <h1>Faça parte da rede que te movimenta</h1>
                </div>

                <div className="download-container">

                    <button>
                        CLIQUE AQUI PARA BAIXAR
                    </button>

                    <h1>Ou escaneie o QR Code abaixo</h1>

                </div>

            </div>

            <div className="section-2">
                <img src={Mockup} />
            </div>
        </div>
    )
}