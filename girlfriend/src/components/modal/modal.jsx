import React from "react";
import "./modal.css";

export default function Modal({
  isOpen,
  setModalOpen,
  children,
  imageSrc,
  text,
  hasButton,
}) {
  if (isOpen) {
    return (
      <div className="container-modal">
        <div className="modal">
          {hasButton && (
            <div className="modal-close" onClick={setModalOpen}>
              X
            </div>
          )}
          <div className="modal-content">
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Descrição da imagem"
                className="modal-image"
              />
            )}
            <p className="modal-text">{text}</p>
            <div>{children}</div>
          </div>
          {hasButton && (
            <button className="modal-button" onClick={setModalOpen}>
              Fechar
            </button>
          )}
        </div>
      </div>
    );
  }
  return null;
}
