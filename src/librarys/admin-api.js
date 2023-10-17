import { getSpringAxios } from "./axios.js";

const axios = getSpringAxios();

export async function createProgram(
  token,
  mid,
  programTitle,
  description,
  category,
  position,
) {
  const data = {
    mid,
    programTitle,
    description,
    category,
    position,
  };

  const axios = getSpringAxios(token);

  const response = await axios.post("/auth/program/create", data);
  return response.data;
}

export async function modifyProgram(
  token,
  id,
  programTitle,
  description,
  category,
  position,
) {
  const data = {
    programTitle,
    description,
    category,
    position,
  };

  const axios = getSpringAxios(token);

  const response = await axios.put(`/auth/program/modify/${id}`, data);
  return response.data;
}

export async function deleteProgram(token, id) {
  const axios = getSpringAxios(token);
  const response = await axios.delete(`/auth/program/delete/${id}`);
  return response.data;
}

export async function createVideo(token, id, formData) {
  const ord = 1;
  const axios = getSpringAxios(token);
  const response = await axios.post(
    `/auth/video/create/${id}/${ord}`,
    formData,
  );
  return response.data;
}

export async function modifyVideoOrder() {
  const data = {};

  const response = await axios.post("", data);

  return response;
}

export async function removeVideo() {
  const data = {};

  const response = await axios.post("", data);

  return response;
}
