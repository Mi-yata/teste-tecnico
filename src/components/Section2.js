import React from "react";
import ".././styles.css";

const Section2 = ({ title, children }) => {
  return (
    <div className="section2">
      <h2>{title}</h2>
      <p>
        Lorem Ipsum é simplesmente uma
        <span>
          <a href=""> simulação de link </a>
        </span>
        da indústria tipográfica e de impressos, e vem sendo utilizado desde o
        século XVI, quando um impressor desconhecido pegou uma bandeja de tipos
        e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
        sobreviveu não só a cinco séculos. Lorem Ipsum é simplesmente uma
        simulação de texto da indústria tipográfica e de impressos, e vem sendo
        utilizado desde o século XVI.
      </p>
    </div>
  );
};

export default Section2;
