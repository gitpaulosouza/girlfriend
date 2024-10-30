import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./letter.css";

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/final-page");
  };

  return (
    <div className="body">
      <div className="container-letter">
        <div
          className={`envelope-wrapper ${isOpen ? "flap" : ""}`}
          onClick={handleClick}
        >
          <div className="envelope">
            <div className="letter">
              <div className="text">
                <strong>Cecilia</strong>
                <p>
                  Obrigado por ser a melhor pessoa da Terra, que eu possa viver
                  todos os meus dias ao seu lado. Seu sorriso colore minha vida.
                  Eu te amo!
                </p>
              </div>
            </div>
          </div>
          <div className="heart"></div>
        </div>
        {isOpen && (
          <button className="continue-button" onClick={routeChange}>
            Continuar →
          </button>
        )}
      </div>
    </div>
  );
};

export default Letter;
