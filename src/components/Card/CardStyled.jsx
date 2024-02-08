import styled from "styled-components";

export const CardContainer = styled.section`
  background-color: var(--light);
  position: relative;
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
  max-height: ${(props) => (props.main ? "inherit" : "360px")};
  box-shadow: 0px 0px 10px #b3b3b3;
  cursor: ${(props) => (props.main ? "default" : "pointer")};
  transition: 0.3s;
  &:hover {
    box-shadow: ${(props) => (props.main ? "0" : "0px 0px 15px #777777")};
    transform: ${(props) => (props.main ? "0" : "translateY(-3px)")};
  }
`;

export const ArticleNews = styled.article`
  display: flex;
  height: 100%;
  & > div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
  img {
    border-radius: 0 0.3rem 0.3rem 0;
    /* height: 100%; */
    max-width: ${(props) => (props.main ? "100%" : "250px")};
    min-width: ${(props) => (props.main ? "50%" : "250px")};
    object-fit: cover;
    object-position: center;
    margin-left: auto;
  }
`;

export const CardHeader = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* height: 100%; */
  h2 {
    line-height: 1.2em;
    font-weight: 700;
    font-size: ${(props) => (props.top ? "2.2rem" : "1.1rem")};
  }
  p {
    font-size: ${(props) => (props.top ? "1.2rem" : ".9rem")};
  }
`;

export const CardFooter = styled.article`
  display: flex;
  gap: 1rem;
  div {
    display: flex;
    gap: 5px;
  }
`;
