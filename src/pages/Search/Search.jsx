/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchNews } from "../../services/newsServices";
import { ContainerResults, SearchNews, TextResults } from "./SearchStyled";
import { Card } from "../../components/Card/Card";

export function Search() {
  const { title } = useParams();
  const [news, setNews] = useState([]);

  async function search() {
    try {
      const newsApi = await searchNews(title);
      setNews(newsApi.data.foundNews);
    } catch (error) {
      console.log(error);
      setNews([]);
    }
  }

  useEffect(() => {
    search();
  }, [title]);

  return (
    <>
      <ContainerResults>
        <TextResults>
          <span>
            {Array.isArray(news) && news.length > 0
              ? `Encontramos ${news.length} ${
                  news.length > 1 ? "resultados" : "resultado"
                } para: `
              : "Não encontramos resultados para:"}
          </span>
          <h2>{title}</h2>
        </TextResults>
        <SearchNews>
          {Array.isArray(news) ? (
            news.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                text={item.text}
                banner={item.banner}
                likes={item.likes}
                comments={item.comments}
                id={item.id}
              />
            ))
          ) : (
            <p>Nenhum resultado encontrado</p>
          )}
        </SearchNews>
      </ContainerResults>
    </>
  );
}
