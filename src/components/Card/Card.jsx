import { TextLimit } from "../TextLimit/TextLimit";
import {
  ArticleNews,
  CardContainer,
  CardFooter,
  CardHeader,
} from "./CardStyled";

/* eslint-disable react/prop-types */
export function Card(props) {
  return (
    <CardContainer top={props.top}>
      <ArticleNews top={props.top}>
        <div>
          <CardHeader top={props.top}>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={props.top ? 300 : 100} />
          </CardHeader>
          <CardFooter>
            <div>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{props.likes?.length}</span>
            </div>
            <div>
              <i className="bi bi-chat"></i>
              <span>{props.comments?.length}</span>
            </div>
          </CardFooter>
        </div>
        <img src={props.banner} alt="Imagem" />
      </ArticleNews>
    </CardContainer>
  );
}
