import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  background-color: var(--gray);
  border-radius: 0.7rem 90px 90px 0.7rem;
  padding: 10px 25px;
  padding-left: 10px;
  margin-bottom: 20px;
  max-width: fit-content;
  gap: 15px;
  align-items: center;
  & > p {
  }
  & > span {
    font-size: 0.75rem;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0%, -100%);
  }

  position: relative;
`;

export const CommentInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 60px;
    border-radius: 90px;
  }
  h5 {
    font-style: italic;
    color: var(--main);
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
  }
`;
