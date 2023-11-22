// import React, { useState, useEffect } from "react";
// import Navbar from "/dizalaga/src/components/Navbar/Navbar";
// import FormPost from "/dizalaga/src/components/";
// import "./Feed.css";

// const Feed = () => {
//   const [isDarkMode, setDarkMode] = useState(
//     localStorage.getItem("modoEscuro") === "true"
//   );

//   useEffect(() => {
//     // Defina o modo escuro no carregamento da página
//     if (isDarkMode) {
//       document.body.style.backgroundColor = "black";
//     }
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!isDarkMode);
//     localStorage.setItem("modoEscuro", !isDarkMode);
//   };

//   return (
//     <>
//       <Navbar />
//       <main className="main">
//         <div className="newPost">
//           <div className="infoUser">
//             <div className="imgUser"></div>
//             <strong>User</strong>
//           </div>

//           <form action="" className="formPost" id="formPost">
//             <textarea
//               name="textarea"
//               placeholder="Escreva aqui"
//               id="textarea"
//             ></textarea>
//             <input
//               type="file"
//               id="fileInput"
//               accept="image/*"
//               style={{ display: "none" }}
//             />
//             <div className="iconsAndButton">
//               <div className="icons">
//                 <button
//                   className="btnFileForm"
//                   onClick={() => document.getElementById("fileInput").click()}
//                 >
//                   <img src="./assets/img.svg" alt="Adicionar uma imagem" />
//                 </button>
//               </div>

//               <button type="submit" id="botao" className="btnSubmitForm">
//                 Publicar
//               </button>
//             </div>
//           </form>
//         </div>

//         <ul className="posts" id="posts"></ul>
//       </main>
//     </>
//   );
// };

// export default Feed;
