import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-breakingnews-xktz.onrender.com";
// const baseURL = "http://localhost:3001";

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

export async function likeNews(newsId) {
  try {
    const response = await axios.patch(
      `${baseURL}/news/${newsId}/like`,
      {},
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao curtir notícia:", error);
    throw error;
  }
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
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar o comentário:", error);
    throw error;
  }
}

export async function deleteComment(newsId, commentId) {
  try {
    const response = await axios.delete(
      `${baseURL}/news/${newsId}/${commentId}/comment`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir o comentário:", error);
    throw error;
  }
}

export async function createNews(data) {
  try {
    const response = await axios.post(`${baseURL}/news/create`, data, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}
