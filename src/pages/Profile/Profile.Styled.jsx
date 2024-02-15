import styled from "styled-components";

export const ProfileContainer = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ProfileHeader = styled.header`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 10px #b3b3b3;
  background-color: var(--light);
  z-index: 0;
`;

export const ProfileIconEdit = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--main);
  background-color: var(--light);
  padding: 1px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 30px;
  transition: 0.3s;
  &:hover {
    color: var(--light);
    background-color: var(--main);
  }
`;

export const ProfileBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
  height: 50%;
  z-index: -1;
  border-radius: 0.3rem 0.3rem 0 0;
`;

export const ProfileUser = styled.div`
  padding: 2rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  h3 {
    font-style: italic;
    color: var(--main);
  }
`;

export const ProfileAvatar = styled.img`
  border-radius: 50%;
  width: 13rem;
  border: 5px solid var(--light);
  object-fit: cover;
  object-position: center;
`;

export const ProfileActions = styled.div`
  padding: 2rem;
`;
export const ProfileIconAdd = styled.i`
  background-color: transparent;
  border-radius: 30px;
  color: var(--main);
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  transition: all.3s;
  &:hover {
    color: #0068a5;
  }
`;

export const ProfileNews = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 1rem auto;
  width: 100%;
  h3 {
    text-align: center;
    font-size: 1.2rem;
    grid-column: 1/-1;
  }
`;
