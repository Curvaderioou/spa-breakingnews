import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-breakingnews-xktz.onrender.com";

export function getAllNews() {
  const response = axios.get(`${baseURL}/news`);
  return response;
}

export function getTopNews() {
  const response = axios.get(`${baseURL}/news/top`);
  return response;
}

export function searchNews(title) {
  const response = axios.get(`${baseURL}/news/search?title=${title}`);
  return response;
}

export function getAllNewsByUser() {
  const response = axios.get(`${baseURL}/news/byUserId`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function newsById(id) {
  const response = axios.get(`${baseURL}/news/byIdNews/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export async function postComment(newsId, message) {
  try {
    // Fazer uma solicitação para enviar o comentário para o backend
    const response = await axios.patch(
      `${baseURL}/news/${newsId}/comment`,
      { message },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return response.data; // retornar os dados da resposta se necessário
  } catch (error) {
    console.error("Erro ao enviar o comentário:", error);
    throw error; // lançar o erro para que ele seja tratado no componente News
  }
}
