import styled from "styled-components";

export const ProfileModalStyled = styled.section`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  background-color: var(--light);
  padding: 20px;
  box-shadow: 0 0 10px #969696;
  border-radius: 0.3em;
  .user-att {
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-size: 1.2em;
  }
  .user-att button,
  form button {
    background-color: var(--main);
    max-width: fit-content;
    margin: 0 auto;
    padding: 5px 20px;
    border-radius: 0.3em;
    color: var(--light);
    border: 1px solid var(--main);
    &:hover {
      background-color: var(--light);
      color: var(--main);
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 25px;
    label {
      font-size: 1.1rem;
    }
    input {
      padding: 5px;
      margin-top: 5px;
      border: none;
      outline: none;
      border-radius: 0.3em;
      box-shadow: 0 0 0px 1px #a3a3a3;
      &:focus {
        box-shadow: 0 0 2px 1px var(--main);
      }
    }
  }
`;
