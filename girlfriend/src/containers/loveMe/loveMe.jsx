import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./loveMe.css";

const LoveMe = () => {
  const [buttonPosition, setButtonPosition] = useState({
    top: "448px",
    left: "200px",
  });

  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/letter");
  };

  const handleMouseOver = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = 60;
    const buttonHeight = 40;
    const margin = 10; // margem de segurança para manter o botão visível

    // Definindo os valores máximos dentro da área visível
    const maxX = windowWidth - buttonWidth - margin;
    const maxY = windowHeight - buttonHeight - margin;

    // Gerando novas posições que mantêm o botão dentro da tela
    const randomX = Math.floor(Math.random() * (maxX - margin * 2)) + margin;
    const randomY = Math.floor(Math.random() * (maxY - margin * 2)) + margin;

    setButtonPosition({ left: `${randomX}px`, top: `${randomY}px` });
  };

  return (
    <div className="painel">
      <h1>Feliz aniversário, afinal, de parabéns você está todo dia 😎</h1>
      <img
        src="https://gifman.net/wp-content/uploads/2019/06/ursinho-fofo-apaixonado.gif"
        alt="Cute Bear"
      />
      <h2>Aceita um presentinho?</h2>
      <button onClick={routeChange} id="sim">
        Sim!
      </button>
      <button id="nao" style={buttonPosition} onMouseOver={handleMouseOver}>
        Não!
      </button>
    </div>
  );
};

export default LoveMe;
