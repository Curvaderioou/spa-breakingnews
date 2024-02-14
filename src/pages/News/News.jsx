/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { newsById, postComment, likeNews } from "../../services/newsServices";
import { HomeHeader } from "../Home/HomeStyled";
import { Card } from "../../components/Card/Card";
import { Comment } from "../../components/Comment/Comment";
import { CommentSection, InputComment } from "./NewsStyled";
import { z } from "zod";

// Schema de validação utilizando Zod
const commentSchema = z
  .string()
  .trim()
  .min(1, "O comentário não pode estar vazio");

export function News() {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar o envio do formulário
  const [updateFlag, setUpdateFlag] = useState(false);

  async function getNewsById() {
    try {
      const newsResponse = await newsById(id);
      setNews(newsResponse.data);
      setComments(newsResponse.data.comments || []);
    } catch (error) {
      console.error("Erro ao obter a notícia:", error);
    }
  }

  async function handleCommentSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return; // Verifica se o formulário já foi enviado

    try {
      setIsSubmitting(true); // Define que o formulário está sendo enviado

      // Valida o comentário utilizando o schema
      commentSchema.parse(comment);

      await postComment(id, comment);
      await getNewsById();
      setComment("");
    } catch (error) {
      console.error("Erro ao enviar o comentário:", error.message);
    } finally {
      setIsSubmitting(false); // Define que o envio do formulário foi concluído
    }
  }

  async function handleLikeUpdated() {
    await getNewsById();
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
          newsId={id}
          onLikeUpdated={handleLikeUpdated} // Passa a função de atualização de likes
        />
      </HomeHeader>
      <CommentSection>
        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.idComment}
              idComment={comment.idComment}
              text={comment.message}
              user={comment.userId}
              date={comment.createdAt}
              newsId={id}
              onCommentDeleted={getNewsById}
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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>{" "}
          {/* Desabilita o botão durante o envio */}
        </form>
      </CommentSection>
    </>
  );
}
