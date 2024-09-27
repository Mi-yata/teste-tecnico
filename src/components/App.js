import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Livro from "./Livro";
import img from "../assets/imgs/tempo-leitura.png";
import ".././styles.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <body className="center">
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
        sobreviveu não só a cinco séculos, como também ao salto para a
        editoração eletrônica, permanecendo essencialmente inalterado. Se
        popularizou na década de 60, quando a Letraset lançou decalques contendo
        passagens de Lorem Ipsum, e mais recentemente quando passou a ser
        integrado a softwares de editoração eletrônica como Aldus PageMaker.
        <br />
        <br />
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
        sobreviveu não só a cinco séculos, como também ao salto para a
        editoração eletrônica, permanecendo essencialmente inalterado.
      </body>
      <p className="paragrafoA">“</p>
      <div className="Segundo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore dolore magna aliqua dollor sit amet aint.
      </div>
      <p className="paragrafoB">”</p>
      <div className="center">
        <p>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
          sobreviveu não só a cinco séculos.
        </p>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <Section
          title="Mini-quadros feitos à mão"
          children="Fonte: New York Times"
        />
      </div>

      <div className="center">
        <Section2
          className="section2"
          title="Aint oupt sain crays"
          children=""
        />
      </div>
      <div className="">
        <Livro title="Nome do livro" children="Autor" />
        <Livro title="Nome do livro" children="Autor" />
        <Livro title="Nome do livro" children="Autor" />
        <Livro title="Nome do livro" children="Autor" />
      </div>

      <div className="center">
        <Section3
          title="Ipsum dollor amet"
          children="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos."
        />
      </div>
    </div>
  );
};

export default App;
