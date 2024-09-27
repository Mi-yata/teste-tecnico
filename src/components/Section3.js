import React from "react";
import ".././styles.css";

const Section3 = ({ title, children }) => {
  return (
    <div className="section3">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Section3;
