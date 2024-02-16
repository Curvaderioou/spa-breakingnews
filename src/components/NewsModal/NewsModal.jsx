/* eslint-disable react/prop-types */
import { useState } from "react";
import { createNews } from "../../services/newsServices";
import { NewsModalStyled } from "./NewsModalStyled";
import { ErrorSpan } from "../Navbar/NavbarStyled";

export function NewsModal(props) {
  const [done, setDone] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  async function handleCreate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Limpar campos que contêm apenas espaços em branco
    Object.keys(data).forEach((key) => {
      if (typeof data[key] === "string") {
        data[key] = data[key].trim();
      }
    });

    // Verificar se algum dos campos está vazio
    const isAnyFieldEmpty = Object.values(data).some((value) => value === "");

    if (isAnyFieldEmpty) {
      // Mostrar mensagem de erro
      setShowErrorMessage(true);
      // Limpar os campos que continham apenas espaços em branco
      Object.keys(data).forEach((key) => {
        if (data[key] === "") {
          document.getElementById(key).value = ""; // Limpar campo
        }
      });
      return;
    }

    try {
      await createNews(data);
      setDone(!done);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NewsModalStyled>
      {done && (
        <div className="user-att">
          <h3>Notícia Criada!</h3>
          <button onClick={props.doneOk} className="btn">
            Ok
          </button>
        </div>
      )}
      {!done && (
        <form onSubmit={handleCreate}>
          {showErrorMessage && <ErrorSpan>Preencha todos os campos</ErrorSpan>}
          <div>
            <label htmlFor="title">Título:</label>
            <input type="text" id="title" name="title" />{" "}
          </div>
          <div>
            <label htmlFor="text">Texto:</label>
            <textarea name="text" id="text"></textarea>
          </div>
          <div>
            <label htmlFor="banner">Imagem:</label>
            <input
              type="text"
              id="banner"
              name="banner"
              placeholder="https://www.imagem/"
            />
          </div>
          <button type="submit" className="btn">
            Postar
          </button>{" "}
        </form>
      )}
    </NewsModalStyled>
  );
}
