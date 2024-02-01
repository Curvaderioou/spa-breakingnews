import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  /* padding: 20px; */
  width: 100%;
  height: 100%;
  background-color: var(--light);
  border-radius: 0.3rem;
  padding: 1rem;
`;
export const ArticleNews = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }
  h2 {
    margin-bottom: 10px;
    font-size: 1.4rem;
    line-height: 1.2em;
    font-weight: 500;
  }
  img {
    width: 40%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.3rem;
  }
`;
export const CardFooter = styled.article`
  display: flex;
  gap: 15px;
  div {
    display: flex;
    gap: 3px;
    align-items: center;
  }
`;
