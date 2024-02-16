/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { newsById, postComment, deleteNews } from "../../services/newsServices";
import { HomeHeader } from "../Home/HomeStyled";
import { Card } from "../../components/Card/Card";
import { Comment } from "../../components/Comment/Comment";
import { CommentSection, GuardaOpt, InputComment, Sure } from "./NewsStyled";
import { z } from "zod";
import { UserContext } from "../../Context/UserContent";
import { findUserById, userLogged } from "../../services/userServices";
import Cookies from "js-cookie";
import { UpdateNewsModal } from "../../components/UpdateNewsModal/UpdateNewsModal";

const commentSchema = z
  .string()
  .trim()
  .min(1, "O comentário não pode estar vazio");

export function News() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState({});
  const [mostra, setMostra] = useState(false);
  const [mostraOpt, setMostraOpt] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [sure, setSure] = useState(false);
  const [user, setUser] = useState(UserContext);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal

  async function getNewsById() {
    try {
      const newsResponse = await newsById(id);
      setNews(newsResponse.data);
      setComments(newsResponse.data.comments || []);
    } catch (error) {
      console.error("Erro ao obter a notícia:", error);
    }
  }

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function checkUser() {
    if (!news.userId || !user._id) return;
    setMostra(user._id === news.userId);
  }

  async function handleCommentSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      commentSchema.parse(comment);

      await postComment(id, comment);
      await getNewsById();
      setComment("");
    } catch (error) {
      console.error("Erro ao enviar o comentário:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleLikeUpdated() {
    await getNewsById();
  }

  function handleOptions() {
    setMostraOpt(!mostraOpt);
  }

  function handleQuestionDeleteNews() {
    setSure(!sure);
  }

  async function handleDeleteNews() {
    await deleteNews(id);
    setSure(!sure);
    setShowModal(true); // Mostrar o modal após excluir a notícia
    setTimeout(() => {
      setShowModal(false); // Ocultar o modal após 3 segundos
      navigate("/"); // Navegar para a página inicial após ocultar o modal
    }, 3000);
  }

  function handleUpdateNews() {
    setUpdateModal(!updateModal);
  }

  useEffect(() => {
    getNewsById();
    if (Cookies.get("token")) findUserLogged();
  }, [id, news]);

  useEffect(() => {
    checkUser();
  }, [user, news]);

  return (
    <>
      <HomeHeader>
        {mostra && (
          <GuardaOpt>
            <button onClick={handleOptions} className="opt-btn">
              <i className="bi bi-three-dots"></i>
            </button>
            {mostraOpt && (
              <div className="opt-div">
                <i
                  className="bi bi-trash3-fill"
                  onClick={handleQuestionDeleteNews}
                ></i>
                <i className="bi bi-pencil-fill" onClick={handleUpdateNews}></i>
              </div>
            )}
          </GuardaOpt>
        )}
        {sure && (
          <Sure>
            <h2>
              Tem certeza que deseja apagar essa notícia? <br />{" "}
              <span>Essa ação não poderá ser desfeita!</span>
            </h2>
            <div className="guarda-btn">
              <button className="btn" onClick={handleQuestionDeleteNews}>
                VOLTAR
              </button>
              <button className="btn btn-danger" onClick={handleDeleteNews}>
                EXCLUIR
              </button>
            </div>
          </Sure>
        )}
        {showModal && (
          <Sure>
            <h2>A notícia foi excluída!</h2>
          </Sure>
        )}
        {updateModal && (
          <UpdateNewsModal
            id={id}
            title={news.title}
            text={news.text}
            banner={news.banner}
            ok={handleUpdateNews}
          />
        )}
        <Card
          main={true}
          top={true}
          title={news.title}
          text={news.text}
          banner={news.banner}
          likes={news.likes}
          comments={news.comments}
          newsId={id}
          onLikeUpdated={handleLikeUpdated}
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
          </button>
        </form>
      </CommentSection>
    </>
  );
}
