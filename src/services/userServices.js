/* eslint-disable no-useless-catch */
import axios from "axios";
import Cookies from "js-cookie";

// const baseURL = "https://api-breakingnews-xktz.onrender.com";
const baseURL = "http://localhost:3001";

export function signup(data) {
  delete data.confirmPassword;
  const body = {
    ...data,
    username: generateUserName(data.name, 14),
    avatar:
      "https://imgb.ifunny.co/images/951d3730ac2e43f9426085daa63c01573bb0344fc3ddeeecf7e6239457c169a0_1.jpg",
    background: "https://i.imgur.com/XbRg9D7.png",
  };
  const response = axios.post(`${baseURL}/user/create`, body);
  return response;
}

export function signin(data) {
  const response = axios.post(`${baseURL}/auth/login`, data);
  return response;
}

export function userLogged() {
  const response = axios.get(`${baseURL}/user/findById`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export async function findUserById(id) {
  try {
    const response = await axios.get(`${baseURL}/user/findById/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.data; // Return only the data part of the response
  } catch (error) {
    throw error; // Rethrow the error for the caller to handle
  }
}

export async function updateUser(id, data) {
  try {
    const token = Cookies.get("token"); // Recuperar o token de Cookies

    if (!token) {
      throw new Error("Token not found"); // Lançar um erro se o token não for encontrado
    }

    const response = await axios.patch(`${baseURL}/user/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Incluir o token no cabeçalho da requisição
      },
    });

    const updatedUser = response.data.userUpdated; // Obter os dados atualizados do usuário
    const updatedToken = response.data.token; // Obter o token atualizados

    // Atualizar o token no Cookies
    Cookies.set("token", updatedToken, { expires: 7 });

    return { user: updatedUser, token: updatedToken }; // Retornar tanto o usuário quanto o token
  } catch (error) {
    throw error; // Rejeitar o erro para o chamador lidar
  }
}

function generateUserName(name, maxLength) {
  // Split the name by spaces
  const nameParts = name.split(" ");

  // Process each part of the name
  let processedName = "";
  for (let i = 0; i < nameParts.length; i++) {
    const part = nameParts[i];
    if (processedName.length + part.length <= maxLength) {
      processedName += part;
    } else {
      // If adding the current part exceeds the maxLength, stop adding parts
      break;
    }
  }

  // Lowercase and remove spaces
  const nameLowerCaseWithoutSpaces = processedName
    .toLowerCase()
    .replace(/\s/g, "");

  // Generate random number
  const randomNumber = Math.floor(Math.random() * 1000);

  // Concatenate username and limit its length
  const userName = `${nameLowerCaseWithoutSpaces}${randomNumber}`;
  return userName.slice(0, maxLength);
}
