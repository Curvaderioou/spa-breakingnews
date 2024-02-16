/* eslint-disable react/prop-types */
import { useState } from "react";
import { createNews } from "../../services/newsServices";
import { NewsModalStyled } from "./NewsModalStyled";

export function NewsModal(props) {
  const [done, setDone] = useState(false);

  async function handleCreate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

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
          <button onClick={props.doneOk}>Ok</button>
        </div>
      )}
      {!done && (
        <form onSubmit={handleCreate}>
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
          <button type="submit">Atualizar</button>{" "}
        </form>
      )}
    </NewsModalStyled>
  );
}
