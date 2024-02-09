/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { findUserById, userLogged } from "../../services/userServices";
import {
  CommentContainer,
  CommentInfoUser,
  CommentOptions,
} from "./CommentStyled";
import { UserContext } from "../../Context/UserContent";
import Cookies from "js-cookie";

export function Comment(props) {
  const [userData, setUserData] = useState({});
  const [mostra, setMostra] = useState(false); // Estado para controlar a exibição condicional

  const { user, setUser } = useContext(UserContext);

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateComment() {}
  async function deleteComment() {}

  function dotsInfo() {
    // Altera o estado de 'mostra' para o valor oposto
    setMostra(!mostra);
  }

  function checkUser() {
    if (user._id === userData._id) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await findUserById(props.user); // Get only the data from the response
        setUserData(data); // Set the user data directly
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [props.user]);

  useEffect(() => {
    if (Cookies.get("token")) findUserLogged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataComment = new Date(props.date);
  const dia = dataComment.getDate();
  const mes = dataComment.getMonth();
  const hora = dataComment.getHours();
  const min = dataComment.getMinutes();
  const ano = dataComment.getFullYear();

  return (
    <CommentContainer>
      <CommentInfoUser>
        <img src={userData.avatar} alt="foto do usuário" />
        <h5>@{userData.username}</h5>
      </CommentInfoUser>
      <p>{props.text}</p>
      <span>
        {dia}/{mes}/{ano} - {hora}:{min}
      </span>
      {checkUser() && (
        <>
          <i className="bi bi-three-dots-vertical" onClick={dotsInfo}></i>
          {mostra && (
            <CommentOptions>
              <i className="bi bi-pencil-fill" onClick={updateComment}></i>
              <i className="bi bi-trash3-fill" onClick={deleteComment}></i>
            </CommentOptions>
          )}
        </>
      )}
    </CommentContainer>
  );
}
