import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
// import Feed from "./components/Feed/Feed";
import Cadastro from "./components/Cadastro/Cadastro";
import PontosDoacao from "./components/PontosDoacao/PontosDoacoes";
import QuemSomos from "./components/QuemSomos/QuemSomos";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        {/* <Route path="/feed" component={Feed} /> */}
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/pontos-doacao" component={PontosDoacao} />
        <Route path="/quem-somos" component={QuemSomos} />
      </Routes>
    </Router>
  );
};

export default App;
