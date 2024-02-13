import styled from "styled-components";

export const CommentSection = styled.section`
  background-color: var(--light);
  display: flex;
  flex-direction: column;
  gap: 45px;
  max-width: 1160px;
  width: calc(100% - 40px);
  margin: 0 20px;
  /* margin-top: 1rem; */
  padding: 20px;
  padding-top: 40px;
  box-shadow: 0px 0px 10px #b3b3b3;
  border-radius: 0 0 0.3rem 0.3rem;
  margin-bottom: 30px;
  form {
    position: relative;
    button {
      position: absolute;
      right: 10px;
      top: 50%;
      padding: 0 6px;
      cursor: pointer;
      transform: translateY(-50%);
      &:hover {
        background-color: #b3b3b3;
        border-radius: 90px;
      }
    }
  }
`;

export const InputComment = styled.input`
  width: 100%;
  border-radius: 0.3rem;
  padding: 5px 10px;
  padding-right: 35px;
  border: none;
  background-color: var(--gray);
  transition: 0.25s;
  &:focus {
    outline: none;
    background-color: #d1d1d1;
  }
`;
