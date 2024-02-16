import styled from "styled-components";

export const NewsModalStyled = styled.section`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  width: 100%;
  padding: 0 10px;
  max-width: 600px;
  .user-att {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    font-size: 1.2em;
    background-color: var(--light);
    box-shadow: 0 0 10px #969696;
    border-radius: 0.3em;
    margin: 0 auto;
    max-width: 300px;
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: var(--light);
    box-shadow: 0 0 10px #969696;
    border-radius: 0.3em;
    padding: 20px;
    gap: 25px;
    width: 100%;
    & > span {
      /* background-color: ; */
    }
    label {
      font-size: 1.1rem;
    }
    textarea {
      resize: vertical;
    }
    input,
    textarea {
      padding: 5px;
      margin-top: 5px;
      border: none;
      outline: none;
      border-radius: 0.3em;
      box-shadow: 0 0 0px 1px #a3a3a3;
      max-width: 600px;
      width: 100%;
      &:focus {
        box-shadow: 0 0 2px 1px var(--main);
      }
    }
  }
`;
