// eslint-disable-next-line no-unused-vars
import { Link, Navigate } from "react-router-dom";
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
    <Link to={"/news/" + props.id}>
      <CardContainer top={props.top} main={props.main}>
        <ArticleNews top={props.top} main={props.main}>
          <div>
            <CardHeader top={props.top}>
              <h2>{props.title}</h2>
              <TextLimit
                text={props.text}
                limit={props.main ? Infinity : 100}
              />
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
    </Link>
  );
}
