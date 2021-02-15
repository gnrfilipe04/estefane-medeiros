import React from "react";

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
                <a>Início</a>
              </li>
              <li>
                <a>Sobre</a>
              </li>
              <li>
                <a>Exterior</a>
              </li>
              <li>
                <a>Contato</a>
              </li>
            </ul>
          </nav>
          <div className="social-icons">
            <img src="facebook.svg" />
            <img src="instagram.svg" />
            <img src="linkedin.svg" />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            venenatis pulvinar lectus, tristique accumsan mi facilisis eu.
            Nullam quam elit, feugiat fermentum nibh id, accumsan dignissim
            risus.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Header;
