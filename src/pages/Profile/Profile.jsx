/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContent";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfileIconEdit,
  ProfileNews,
  ProfileUser,
} from "./Profile.Styled";
import { getAllNewsByUser } from "../../services/newsServices";
import { Card } from "../../components/Card/Card";
import { ProfileModal } from "../../components/ProfileModal/ProfileModal";
import { NewsModal } from "../../components/NewsModal/NewsModal";

export function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [news, setNews] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalNews, setModalNews] = useState(false);

  async function findAllNewsByUser() {
    const newsResponse = await getAllNewsByUser();
    setNews(newsResponse.data.newsByUser);
  }
  function handleModal() {
    setModal(!modal);
    setModalNews(false);
  }
  function handleModalNews() {
    setModalNews(!modalNews);
    setModal(false);
  }

  useEffect(() => {
    findAllNewsByUser();
  }, [user]);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIconEdit>
          <i className="bi bi-pencil-square" onClick={handleModal}></i>
        </ProfileIconEdit>
        <ProfileBackground src={user.background} />
        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
          <h2>{user.name}</h2>
          <h3>@{user.username}</h3>
        </ProfileUser>
        <ProfileActions>
          <ProfileIconAdd>
            <i className="bi bi-plus-circle" onClick={handleModalNews}></i>
          </ProfileIconAdd>
        </ProfileActions>
      </ProfileHeader>

      {modal && (
        <ProfileModal
          id={user._id}
          avatar={user.avatar}
          name={user.name}
          username={user.username}
          background={user.background}
          ok={handleModal}
        />
      )}

      {modalNews && <NewsModal doneOk={handleModalNews} />}

      <ProfileNews>
        {news.length === 0 && <h3>Você ainda não criou nenhuma notícia</h3>}
        {news.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
              id={item.id}
            />
          );
        })}
      </ProfileNews>
    </ProfileContainer>
  );
}
