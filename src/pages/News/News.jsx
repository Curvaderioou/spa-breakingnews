/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { newsById, postComment } from "../../services/newsServices";
import { HomeHeader } from "../Home/HomeStyled";
import { Card } from "../../components/Card/Card";
import { Comment } from "../../components/Comment/Comment";
import { CommentSection, InputComment } from "./NewsStyled";

export function News() {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  async function getNewsById() {
    try {
      const newsResponse = await newsById(id);
      setNews(newsResponse.data);
      setComments(newsResponse.data.comments || []); // Atualiza a lista de comentários
    } catch (error) {
      console.error("Erro ao obter a notícia:", error);
    }
  }

  async function handleCommentSubmit(event) {
    event.preventDefault();

    try {
      await postComment(id, comment);
      await getNewsById(); // Atualiza a notícia para buscar os comentários atualizados
      setComment("");
    } catch (error) {
      console.error("Erro ao enviar o comentário:", error);
    }
  }

  useEffect(() => {
    getNewsById();
  }, [id]);

  return (
    <>
      <HomeHeader>
        <Card
          main={true}
          top={true}
          title={news.title}
          text={news.text}
          banner={news.banner}
          likes={news.likes}
          comments={news.comments}
        />
      </HomeHeader>
      <CommentSection>
        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              text={comment.message}
              user={comment.userId}
              date={comment.createdAt}
            />
          ))
        ) : (
          <h4>Ainda não há comentários</h4>
        )}
        <form onSubmit={handleCommentSubmit}>
          <InputComment
            placeholder="Escreva um comentário..."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></InputComment>
          <button type="submit">Enviar</button>
        </form>
      </CommentSection>
    </>
  );
}
