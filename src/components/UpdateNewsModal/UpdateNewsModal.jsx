/* eslint-disable react/prop-types */
import { updateNews } from "../../services/newsServices";
import { useState } from "react";
import { UpdateNewsModalStyled } from "./UpdateNewsModalStyled";

export function UpdateNewsModal(props) {
  const [newsAtt, setNewsAtt] = useState(false);

  async function handleUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

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
        </form>
      )}
    </UpdateNewsModalStyled>
  );
}
