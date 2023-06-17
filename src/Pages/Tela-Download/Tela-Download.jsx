import React from 'react';
import './Tela-Download.css';

import Logo from './img/Icons/logo.svg';
import Mockup from './img/mockup.png';

import Person from './img/Icons/person-icon.svg';
import Calendar from './img/Icons/calendar.svg';
import Chat from './img/Icons/chat.svg';

import Camila from './img/Foto-Participantes/fotoCamila.png';
import Tiago from './img/Foto-Participantes/fotoTiago.png';
import Luis from './img/Foto-Participantes/fotoLuis.png';
import Osmar from './img/Foto-Participantes/fotoOsmar.png';

export default function TelaDownload() {
    return (
        <div className="container-tela-download">

            <div className="section-container">

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

                        <div className="qrcode-fds"></div>

                    </div>

                </div>

                <div className="section-2">
                    <img src={Mockup} />
                </div>

            </div>

            <div className="section-3">

                <div className="container-cards">
                    <div className="card">
                        <img src={Person} />
                        <h2>Conheça pessoas novas</h2>
                    </div>

                    <div className="card">
                        <img src={Calendar} />
                        <h2>Marque eventos de esportes</h2>
                    </div>

                    <div className="card">
                        <img src={Chat} />
                        <h2>Converse com seus amigos</h2>
                    </div>
                </div>

                <h1>Conheça mais dos desenvolvedores!</h1>

                <div className="container-cards">

                    <div className="devs-card">
                        <img src={Camila} />
                        <h3>Camila Piovesan</h3>
                        <h4>Design</h4>
                        <h4>Documentação</h4>
                    </div>

                    <div className="devs-card">
                        <img src={Tiago} />
                        <h3>Tiago Alves</h3>
                        <h4>Frontend Developer</h4>
                    </div>

                    <div className="devs-card">
                        <img src={Luis} />
                        <h3>Luis Felipe</h3>
                        <h4>Backend Developer</h4>
                        <h4>Banco de Dados</h4>
                    </div>

                    <div className="devs-card">
                        <img src={Osmar} />
                        <h3>Osmar Bruno</h3>
                        <h4>FullStack Developer</h4>
                    </div>

                </div>

            </div>

        </div>
    )
}