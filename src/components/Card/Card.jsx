import { TextLimit } from "../TextLimit/TextLimit";
import { ArticleNews, CardContainer, CardFooter } from "./CardStyled";

/* eslint-disable react/prop-types */
export function Card(props) {
  return (
    <CardContainer>
      <ArticleNews>
        <div>
          <h2>{props.title}</h2>
          <img src={props.banner} alt="Imagem" />
        </div>
        <TextLimit text={props.text} limit={150} />
      </ArticleNews>
      <CardFooter>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{props.likes}</span>
        </div>
        <div>
          <i className="bi bi-chat"></i>
          <span>{props.comments}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}
