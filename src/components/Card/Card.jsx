// eslint-disable-next-line no-unused-vars
import { Link, Navigate, useNavigate } from "react-router-dom";
import { TextLimit } from "../TextLimit/TextLimit";
import {
  ArticleNews,
  CardContainer,
  CardFooter,
  CardHeader,
} from "./CardStyled";
import Cookies from "js-cookie";

/* eslint-disable react/prop-types */
export function Card(props) {
  const navigate = useNavigate();

  function handleCommentClick() {
    if (Cookies.get("token")) {
      navigate(`/news/${props.id}`);
    } else {
      navigate("/auth");
    }
  }

  return (
    <div onClick={handleCommentClick}>
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
    </div>
  );
}
