/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { findUserById } from "../../services/userServices";
import { CommentContainer, CommentInfoUser } from "./CommentStyled";

export function Comment(props) {
  const [userData, setUserData] = useState({});

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
    </CommentContainer>
  );
}
