/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
// import { news } from "../../Datas.jsx";
import { getAllNews } from "../../services/postServices.js";
import { HomeBody } from "./HomeStyled.jsx";
import { useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  async function findAllNews() {
    const response = await getAllNews();
    setNews(response.data.results);
  }

  useEffect(() => {
    findAllNews();
  }, []);

  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes.length}
              comments={item.comments.length}
            />
          );
        })}
      </HomeBody>
    </>
  );
}
