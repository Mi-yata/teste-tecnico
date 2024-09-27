import React from "react";
import ".././styles.css";
import img2 from "../assets/imgs/img.png";

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <img src={img2} />
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Section;
