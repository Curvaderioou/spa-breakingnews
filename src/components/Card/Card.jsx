/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextLimit } from "../TextLimit/TextLimit";
import {
  ArticleNews,
  CardContainer,
  CardFooter,
  CardHeader,
} from "./CardStyled";
import Cookies from "js-cookie";
import { likeNews } from "../../services/newsServices";

export function Card(props) {
  const navigate = useNavigate();
  const [likesCount, setLikesCount] = useState(props.likes?.length);

  useEffect(() => {
    setLikesCount(props.likes?.length);
  }, [props.likes]);

  async function handleLikeNews() {
    try {
      await likeNews(props.newsId);
      // A chamada de API foi bem-sucedida, então podemos atualizar os likes
      props.onLikeUpdated(); // Chama a função de atualização de likes fornecida como prop
    } catch (error) {
      console.log(error);
    }
  }

  function handleCommentClick() {
    if (Cookies.get("token") && !props.main) {
      navigate(`/news/${props.id}`);
    } else if (!props.main) {
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
              <div onClick={handleLikeNews}>
                <i className="bi bi-hand-thumbs-up"></i>
                {/* Mostra o número atualizado de likes */}
                <span>{likesCount}</span>
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
