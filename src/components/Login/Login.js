import React from "react";
import "./LoginForm.css";
import alaguinho from "./images/alaguinho.png";
import logoDizAlaga from "./images/logoDizAlaga.png";
import googleIcon from "./images/google-icon.png";
import facebookIcon from "./images/facebook-icon.png";

const LoginForm = () => {
  return (
    <div className="container">
      <div className="left-section">
        <img src={alaguinho} alt="alaguinho" />
        <p className="top-phrase">A chuva não avisa quando vai cair,</p>
        <p className="bottom-text">mas nós ajudamos como se prevenir.</p>
      </div>

      <div className="right-section">
        <div className="LoginForm">
          <img src={logoDizAlaga} alt="logo" />
          <h2>Login</h2>
          <form>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nome de usuário ou email"
              required
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
            />

            <div className="already-have-account">
              <p>
                Não tem conta?{" "}
                <a href="/dizalaga/src/components/Cadastro/Cadastro.js">
                  Cadastrar
                </a>
              </p>
            </div>

            <Link to="/dizalaga/src/components/Home/Home.js" button type="submit">
              Entrar
            </Link>
            <div className="social-buttons">
              <button type="submit">
                <img src={googleIcon} alt="Google" />
                Entrar com Google
              </button>
              <button type="button">
                <img src={facebookIcon} alt="Facebook" />
                Entrar com Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
