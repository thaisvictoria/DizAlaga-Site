import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [isDarkMode, setDarkMode] = useState(
    localStorage.getItem("modoEscuro") === "true"
  );

  useEffect(() => {
    // Defina o modo escuro no carregamento da página
    if (isDarkMode) {
      document.body.style.backgroundColor = "black";
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    // Salve o estado do modo escuro no localStorage
    localStorage.setItem("modoEscuro", !isDarkMode);
  };

  return (
    <div>
      <Navbar />
      <div className="body-clima">
        <div className="widget-Clima">
          <div
            id="ww_92aa553b8005b"
            v="1.3"
            loc="auto"
            a='{"t":"horizontal","lang":"pt","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#0097A7","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#FFFFFF","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'
          >
            Mais previsões:{" "}
            <Link to="https://oneweather.org/el/ioannina/"
              id="ww_92aa553b8005b_u"
              target="_blank"
            >
              Ιωάννινα πρόγνωση καιρού
            </Link>
          </div>
          <script
            async
            src="https://app2.weatherwidget.org/js/?id=ww_92aa553b8005b"
          ></script>
        </div>
      </div>
      <div className="mapa"></div>

      <footer>
        <Link to="https://instagram.com/dizalaga?igshid=OGQ5ZDc2ODk2ZA==">
          <div className="instagram">
            <img
              src="/dizalaga/src/images/instagram.png"
              width="25px"
              height="30px"
              alt="Instagram"
            />
            <p> @DizAlaga</p>
          </div>
        </Link>
      </footer>
    </div>
  );
};
export default Home;
