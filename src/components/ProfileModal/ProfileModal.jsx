/* eslint-disable react/prop-types */
import { ProfileModalStyled } from "./ProfileModalStyled";
import { updateUser } from "../../services/userServices";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContent";

export function ProfileModal(props) {
  const [userAtt, setUserAtt] = useState(false);
  const { updatedInfoUser } = useContext(UserContext);

  async function handleUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await updateUser(props.id, data);

      // Extract the updated user data from the response
      const updatedUserData = response.user;

      // Update the user context with the updated user data
      updatedInfoUser(updatedUserData);
      setUserAtt(!userAtt);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProfileModalStyled>
      {userAtt && (
        <div className="user-att">
          <h3>Usuário atualizado!</h3>
          <button onClick={props.ok} className="btn">
            Ok
          </button>
        </div>
      )}
      {!userAtt && (
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="avatar">Avatar:</label>
            <input type="text" defaultValue={props.avatar} name="avatar" />{" "}
          </div>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" defaultValue={props.name} name="name" />
          </div>
          <div>
            <label htmlFor="username">Nome de usuário:</label>
            <input type="text" defaultValue={props.username} name="username" />
          </div>
          <div>
            <label htmlFor="background">Imagem de Fundo:</label>
            <input
              type="text"
              defaultValue={props.background}
              name="background"
            />
          </div>
          <button type="submit" className="btn">
            Atualizar
          </button>{" "}
        </form>
      )}
    </ProfileModalStyled>
  );
}
