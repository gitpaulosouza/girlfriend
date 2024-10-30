import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./form.css";

import Modal from "../../components/modal/modal";
import { images } from "../../constants";

const Form = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  const handleForm = (event) => {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let formDataObj = Object.fromEntries(formData);

    if (
      (formDataObj.bejo == "beja" && formDataObj.dia == "23") ||
      (formDataObj.bejo == "beija" && formDataObj.dia == "23")
    ) {
      setLoginSuccess(true);
      setTimeout(() => {
        routeChange("/gift");
      }, 6000);
    } else {
      setOpenModal(true);
    }
  };

  return (
    <div className="containerForm">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Bem vindo!
            </label>
            <div className="text-content">
              <div className="text">
                Este site foi desenvolvido única e exclusivamente para Cecilia
                Trizoti Bezerra, portadora do CPF 404.962.698-52 e nascida em 30
                de outubro de 2004. Todas as informações, conteúdos e
                funcionalidades aqui presentes foram criados com o intuito de
                atender a ela especificamente.
              </div>
            </div>
            <button
              onClick={(event) => {
                event.preventDefault();
                setOpenModal(true);
              }}
            >
              EU NÃO SOU A CECILIA
            </button>
          </form>
        </div>
        <div className="login">
          <form onSubmit={handleForm}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="password"
              name="bejo"
              placeholder="Apelido da cecilia no namoro"
              required=""
            />
            <input type="text" placeholder="Numero do Dia do amô" name="dia" />
            <button>Login</button>
          </form>
        </div>
      </div>
      <Modal
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        imageSrc={images.angryBear}
        text={"Saia daqui, você não é o meu amor!"}
        hasButton={true}
      />

      <Modal
        isOpen={loginSuccess}
        setModalOpen={() => setLoginSuccess(!loginSuccess)}
        imageSrc={images.happyBear}
        text={"Bem vinda amor da minha vida! Feliz aniversário meu bem"}
      />
    </div>
  );
};

export default Form;
