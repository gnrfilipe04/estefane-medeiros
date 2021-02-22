import React from "react";
import Link from 'next/link'
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <div className="header-top">
        <div className="logo">
          <img src="logo-header.svg" />
        </div>
        <div className="nav-social">
          <nav>
            <ul>
              <li>
                <Link href="#inicio">
                  <a>Início</a>
                </Link>
                
              </li>
              <li>
                <Link href='#sobre'>
                  <a>Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="#exterior">
                  <a>Exterior</a>
                </Link>
              </li>
              <li>
                <Link href="#contato">
                  <a>Contato</a>
                </Link>
                
              </li>
            </ul>
          </nav>
          <div className="social-icons">
            <Link href="https://www.facebook.com/estefanemedeiross">
              <a target="_blank"><img src="facebook.svg" /></a>
            </Link>
            <Link href="https://www.instagram.com/estefanemedeiross/">
              <a target="_blank"><img src="instagram.svg" /></a>
            </Link>
            <Link href="https://www.linkedin.com/in/estefane-medeiros-2518531ab/">
              <a target="_blank"><img src="linkedin.svg" /></a>
            </Link>
          </div>
        </div>
      </div>
      <div className="banner-content">
        <img className="estefane-img" src="estefane2.jpeg" />
        <div className="text-banner">
          <div className="title-banner">
            <h1>Bem vindo!</h1>
            <img className="linha" src="linha-grossa.png" />
          </div>
          <p>
            Eu sou a Estefane Medeiros, sou Psicologa, adepta da Terapia
            Cognitiva-Comportamental. Auxilio pessoas do mundo todo a lidarem
            com suas questões psicologicas, desenvolvendo maior
            autoresponsabilidade.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Header;
