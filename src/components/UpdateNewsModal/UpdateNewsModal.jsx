/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { updateNews } from "../../services/newsServices";
import { useState } from "react";
import { UpdateNewsModalStyled } from "./UpdateNewsModalStyled";
import { ErrorSpan } from "../Navbar/NavbarStyled";

export function UpdateNewsModal(props) {
  const [newsAtt, setNewsAtt] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  async function handleUpdate(event) {
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
      return;
    }

    try {
      await updateNews(props.id, data);

      setNewsAtt(!newsAtt);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UpdateNewsModalStyled>
      {newsAtt && (
        <div className="user-att">
          <h3>Notícia atualizada!</h3>
          <button onClick={props.ok} className="btn">
            Ok
          </button>
        </div>
      )}
      {!newsAtt && (
        <form onSubmit={handleUpdate}>
          {showErrorMessage && <ErrorSpan>Preencha todos os campos</ErrorSpan>}
          <div>
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              defaultValue={props.title}
              name="title"
            />{" "}
          </div>
          <div>
            <label htmlFor="text">Texto:</label>
            <textarea
              name="text"
              defaultValue={props.text}
              id="text"
            ></textarea>
          </div>
          <div>
            <label htmlFor="banner">Imagem:</label>
            <input
              type="text"
              id="banner"
              name="banner"
              defaultValue={props.banner}
            />
          </div>
          <button type="submit" className="btn">
            Atualizar
          </button>{" "}
          <button onClick={props.ok}>Cancelar</button>
        </form>
      )}
    </UpdateNewsModalStyled>
  );
}
