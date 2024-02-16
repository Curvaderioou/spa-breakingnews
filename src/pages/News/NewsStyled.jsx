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

export const Sure = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffbcbc;
  padding: 20px;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  z-index: 3000;
  h2 {
    font-size: 1.2rem;
  }
  span {
    color: red;
  }
  .guarda-btn {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .btn:hover {
    background-color: transparent;
  }
`;

export const GuardaOpt = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
  .opt-btn {
    font-size: 1.5rem;
    color: gray;
    &:hover {
      color: #000;
    }
  }
  .opt-div {
    color: gray;
    background-color: var(--light);
    max-width: fit-content;
    border-radius: 0.3rem;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap: 15px;
    i {
      transition: 0.3s;
      cursor: pointer;
    }
    i:hover {
      color: #000;
    }
  }
`;
