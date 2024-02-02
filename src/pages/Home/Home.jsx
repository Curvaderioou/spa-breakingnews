/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
// import { news } from "../../Datas.jsx";
import { getAllNews, getTopNews } from "../../services/newsServices.js";
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";
import { useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState({});

  async function findNews() {
    const newsResponse = await getAllNews();
    setNews(newsResponse.data.results);
    const topNewsResponse = await getTopNews();
    setTopNews(topNewsResponse.data.news);
  }

  useEffect(() => {
    findNews();
  }, []);

  return (
    <>
      <Navbar />
      <HomeHeader>
        <Card
          top={true}
          title={topNews.title}
          text={topNews.text}
          banner={topNews.banner}
          likes={topNews.likes}
          comments={topNews.comments}
        />
      </HomeHeader>
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </HomeBody>
    </>
  );
}
