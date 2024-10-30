import React from "react";

import { images } from "../../constants";

import "./finalPage.css";

const Slider = () => {
  const items = Array.from({ length: 39 }, (_, index) => index + 1); // Gera um array de 1 a 9

  return (
    <main>
      <div className="birthday">
        <div className="title">Feliz aniversário meu bem!</div>
        <div className="subtitle">
          Que tenhamos a benção de viver décadas um ao lado do outro
        </div>
        <div className="sub">Feito com muito amor para Cecilia</div>
      </div>
      <div
        className="slider"
        style={{
          "--width": "200px",
          "--height": "200px",
          "--quantity": 39,
        }}
      >
        <div className="list">
          {items.map((position) => (
            <div
              className="item"
              key={position}
              style={{ "--position": position }}
            >
              <img
                src={images[`slider2_${position}`]}
                alt={`Slider image ${position}`}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Slider;
