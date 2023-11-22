import React from "react";
import "./CadastroForm.css";
import alaguinho from "./images/alaguinho.png";
import logoDizAlaga from "./images/logoDizAlaga.png";
import googleIcon from "./images/google-icon.png";
import facebookIcon from "./images/facebook-icon.png";
import { Link } from "react-router-dom";

const CadastroForm = () => {
  return (
    <div className="container">
      <div className="left-section">
        <img src={alaguinho} alt="alaguinho" />
        <p className="top-phrase">Junta-se a nós para um impacto </p>
        <p className="bottom-text">positivo em tempos difíceis!</p>
      </div>

      <div className="right-section">
        <div className="CadastroForm">
          <img src={logoDizAlaga} alt="logo" />
          <h2>Cadastro</h2>
          <form>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nome de usuário"
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
            />

            <input
              type="text"
              id="cpfCnpj"
              name="cpfCnpj"
              placeholder="CPF ou CNPJ"
              required
            />

            <div className="already-have-account">
              <p>
                Já tem conta?{" "}
                <Link to="/dizalaga/src/components/Login/Login.js">
                  Faça login aqui
                </Link>
              </p>
            </div>

            <Link to="/dizalaga/src/components/Home/Home.js" type="submit">
              Cadastrar
            </Link>
            <div className="social-buttons">
              <button type="submit">
                <img src={googleIcon} alt="Google" />
                Cadastrar com Google
              </button>
              <button type="button">
                <img src={facebookIcon} alt="Facebook" />
                Cadastrar com Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroForm;
