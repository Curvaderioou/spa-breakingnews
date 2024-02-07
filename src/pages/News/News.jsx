import { useEffect, useState } from "react";
import { newsById } from "../../services/newsServices";
import { HomeHeader } from "../Home/HomeStyled";
import { Card } from "../../components/Card/Card";
import { useParams } from "react-router-dom";

export function News() {
  const { id } = useParams();
  const [news, setNews] = useState({}); // Initialize as null

  async function getNewsById() {
    const newsResponse = await newsById(id);
    setNews(newsResponse.data);
  }

  useEffect(() => {
    getNewsById();
  }, [id]);

  // Check if news is null, undefined, or an empty object before rendering
  //   if (!news || Object.keys(news).length === 0) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <HomeHeader>
      <Card
        top={true}
        title={news.title}
        text={news.text}
        banner={news.banner}
        likes={news.likes}
        comments={news.comments}
      />
    </HomeHeader>
  );
}
