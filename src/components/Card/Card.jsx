/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
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
import { UserContext } from "../../Context/UserContent";
import { userLogged } from "../../services/userServices";

export function Card(props) {
  const navigate = useNavigate();
  const [likesCount, setLikesCount] = useState(props.likes?.length);
  const { user, setUser } = useContext(UserContext);
  const [userLiked, setUserLiked] = useState(false);

  useEffect(() => {
    setLikesCount(props.likes?.length);
  }, [props.likes]);

  useEffect(() => {
    checkUserLiked();
  }, [user, props.likes]);

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function checkUserLiked() {
    if (!user) {
      await findUserLogged();
    }
    if (user && props.likes.some((like) => like.userId === user._id)) {
      setUserLiked(true);
    } else {
      setUserLiked(false);
    }
  }

  async function handleLikeNews() {
    try {
      await likeNews(props.newsId);
      // A chamada de API foi bem-sucedida, então podemos atualizar os likes
      props.onLikeUpdated(); // Chama a função de atualização de likes fornecida como prop
      setUserLiked(!userLiked);
      setLikesCount((prevCount) => (userLiked ? prevCount - 1 : prevCount + 1));
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
                {userLiked ? (
                  <i
                    className="bi bi-hand-thumbs-up-fill"
                    style={{ color: "var(--main)" }}
                  ></i>
                ) : (
                  <i className="bi bi-hand-thumbs-up"></i>
                )}

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
