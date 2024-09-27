import React from "react";
import ".././styles.css";

const Livro = ({ title, children }) => {
  return (
    <div className="livros">
      <img src="" />
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Livro;
