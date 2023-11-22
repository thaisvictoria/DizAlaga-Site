// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode }) => {
  return (
    <div className="logo-container">
      <img
        src="/dizalaga/src/images/dizalaga logo.png"
        alt="Logo"
        className="logo"
      />

      <nav>
        <Link to="/" className="denuncias">
          Denúncias
        </Link>
        <Link to="/area-de-risco" className="areaDeRisco">
          Áreas de risco
        </Link>
        <Link to="/pontos-doacao" className="doacoes">
          Pontos de doações
        </Link>
        <Link to="/quem-somos" className="quemSomos">
          Quem somos?
        </Link>

        <div className="Pesquisar">
          <form>
            <input
              type="text"
              className="input-with-icon"
              placeholder="Pesquisar região:"
            />
          </form>
          <button className="tema" onClick={toggleDarkMode}>
            <img
              src="/dizalaga/src/images/tema.png"
              width="10px"
              alt="Tema"
              className="imagemTema"
            />
          </button>
        </div>
        <Link to="/dizalaga/src/components/Cadastro/Cadastro.js">
          <img
            src="/dizalaga/src/images/user.png"
            width="50px"
            alt="Usuário"
            className="user"
          />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
