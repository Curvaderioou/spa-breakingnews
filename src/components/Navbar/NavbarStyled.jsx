import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  /* position: fixed; */
  top: 0;
  background-color: var(--light);
  z-index: 1;
  box-shadow: 0px 0px 5px #929292;
`;

export const InputNav = styled.div`
  position: relative;
  border-radius: 3px;
  border: 1px solid var(--gray);
  background-color: var(--gray);
  i {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translate(0, -50%);
    transition: all.3s;
    padding: 3px;
  }
  i:hover {
    color: var(--main);
    filter: drop-shadow(0px 0px 2px var(--main));
  }
  input {
    padding: 5px;
    border: none;
    border-radius: 2px;
    outline: none;
    background-color: var(--gray);
    border: 1px solid transparent;
    padding: 5px 10px;
    padding-right: 25px;
    &:focus {
      border: 1px solid var(--main);
    }
  }
`;

export const ImageLogo = styled.img`
  max-width: 140px;
  transition: all.3s;
`;

export const Button = styled.button`
  background-color: var(--main);
  border-radius: 3px;
  color: var(--light);
  padding: 4px 20px;
  border: 1px solid var(--main);
  max-width: fit-content;
  text-transform: uppercase;

  &:hover {
    background-color: var(--light);
    color: var(--main);
  }
`;

export const ErrorSpan = styled.span`
  background-color: #ffaeae;
  color: #9e0000;
  padding: 1rem;
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 700;
`;
