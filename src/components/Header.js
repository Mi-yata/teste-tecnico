import React from "react";
import ".././styles.css";
import logo from "../assets/imgs/icon.png";
import tempo from "../assets/imgs/tempo-leitura.png";
import data from "../assets/imgs/data-publicada.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <div>
        <h1>DESIGN BETTER. FASTER. TOGETHER.</h1>
        <p>
          The digital product design platform powering the world’s best user
          xperiences
        </p>
      </div>
      <div className="subTitulo">
        Categoria: <a href="">Por onde começar</a>
        <img className="subImagem" src={tempo} />
        <img className="subImagem" src={data} />
      </div>
    </header>
  );
};

export default Header;
