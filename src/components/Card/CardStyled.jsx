import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  /* padding: 20px; */
  max-width: ${(props) => (props.top ? "inherit" : "570px")};
  width: 100%;
  height: 100%;
  background-color: var(--light);
  border-radius: 0.3rem;
  /* padding: 1rem; */
  box-shadow: 0px 0px 12px #cfcfcf;
`;
export const ArticleNews = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }

  img {
    max-width: ${(props) => (props.top ? "350px" : "220px")};
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0 0.3rem 0.3rem 0;
  }
  p {
    font-size: ${(props) => (props.top ? "1.3rem" : "1rem")};
    text-align: end;
  }
`;

export const CardHeader = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
  padding: 1rem;

  h2 {
    font-size: ${(props) => (props.top ? "2rem" : "1.4rem")};
    text-align: end;
    max-width: ${(props) => (props.top ? "none" : "300px!important")};
    line-height: 1.2em;
    font-weight: 500;
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
