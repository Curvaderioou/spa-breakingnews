import styled from "styled-components";

export const ContainerResults = styled.section`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const SearchNews = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 1rem auto;
  width: 90%;
`;

export const TextResults = styled.div`
  padding: 2rem;
  margin: 0 0 2rem;
  background-color: var(--light);
  width: 80%;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 5px #c4c4c4;
  span {
    font-size: 1rem;
  }
`;
