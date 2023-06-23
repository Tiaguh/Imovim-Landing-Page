import React from 'react';
import './Tela-Download.css';
import { Link } from 'react-router-dom'

import Logo from './img/Icons/logo.svg';
import Mockup from './img/mockup.png';

import Person from './img/Icons/person-icon.svg';
import Calendar from './img/Icons/calendar.svg';
import Chat from './img/Icons/chat.svg';

import Camila from './img/Foto-Participantes/fotoCamila.png';
import Tiago from './img/Foto-Participantes/fotoTiago.png';
import Luis from './img/Foto-Participantes/fotoLuis.png';
import Osmar from './img/Foto-Participantes/fotoOsmar.png';

import Figma from './img/Tools/figmaLogo.svg';
import Firebase from './img/Tools/firebaseLogo.svg';
import Github from './img/Tools/githubLogo.svg';
import Mongo from './img/Tools/mongoLogo.svg';
import Mysql from './img/Tools/mysqlLogo.svg';
import Node from './img/Tools/nodeLogo.svg';
import ReactNative from './img/Tools/reactLogo.svg';
import Socketio from './img/Tools/socketioLogo.svg';

import Title from './img/title.svg';

import Footer from './img/Footer/Footer.svg'

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

                            <Link
                                className="link"
                                to="termos-de-uso"
                            >
                                <h1>Termos de uso</h1>
                            </Link>
                        </div>

                    </div>

                    <div className="slogan-container">
                        <h1>Tecnologia + Esportes = imovim</h1>
                        <h1>Faça parte da rede que te movimenta</h1>
                    </div>

                    <div className="download-container">

                        <a href="" download>
                            <button>
                                CLIQUE AQUI PARA BAIXAR
                            </button>
                        </a>

                        <h1>Ou escaneie o QR Code abaixo</h1>

                        <div className="qrcode-fds"></div>

                    </div>

                </div>

                <div className="section-2">
                    <img src={Mockup} />
                </div>

            </div>

            <div className="section-3">

                <div className="container-cards-text">
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

            <div className="section-4">

                <div className="text-container">

                    <div className="text">
                        <p>O imovim é um projeto de conclusão de curso elaborado durante o curso de Desenvolvimento de Sistemas na Etec de Embu.</p>
                        <p>O nosso objetivo é unir as comunidades esportivas incentivando eventos, atividades físicas e socialização entre pessoas com o mesmo interesse </p>
                    </div>

                    <div className="links">
                        {/* <p>Acesse a monografia oficial a partir deste LINK</p> */}

                        <p>Acesse o repositório do projeto em:</p>

                        <p
                            onClick={() => window.open("https://github.com/Imovim")}
                            className="link-repository"
                        >
                            https://github.com/Imovim
                        </p>

                    </div>

                </div>

                <div className="tools-container">

                    <div className="tools-container-text" >
                        <h1>Foi desenvolvido através das seguintes tecnologias:</h1>
                    </div>

                    <div className='tools-card-container'>

                        <div className="tools-card">
                            <img src={ReactNative} />
                        </div>

                        <div className="tools-card">
                            <img src={Node} />
                        </div>

                        <div className="tools-card">
                            <img src={Mysql} />
                        </div>

                        <div className="tools-card">
                            <img src={Firebase} />
                        </div>

                        <div className="tools-card">
                            <img src={Mongo} />
                        </div>

                        <div className="tools-card">
                            <img src={Socketio} />
                        </div>

                        <div className="tools-card">
                            <img src={Figma} />
                        </div>

                        <div className="tools-card">
                            <img src={Github} />
                        </div>

                    </div>
                </div>

            </div>

            <div className="section-5">
                <img src={Title} />

                <h5>Quer nos mandar uma sugestão ou tirar alguma dúvida? </h5>
                <h5>Mande um email para</h5>
                <h5>projeto.imovim@gmail.com</h5>
            </div>

            <div className="section-6">
                <img src={Footer} />
            </div>

        </div>
    )
}