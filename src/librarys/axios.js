import axios from "axios";
const SPRING_URL = import.meta.env.VITE_SPRING_URL;
const AI_URL = import.meta.env.VITE_AI_URL;

export default axios.create({
  baseURL: SPRING_URL,
  timeout: 10000,
});

export function getSpringAxios(token = null) {
  const options = {
    baseURL: SPRING_URL,
    timeout: 1000 * 10,
  };

  if (token) {
    options.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return axios.create(options);
}

export function getAIAxios() {
  return axios.create({
    baseURL: AI_URL,
    timeout: 1000 * 60 * 60 * 24,
  });
}

export async function createVideo(options) {
  const axios = getSpringAxios();

  const data = new FormData();
  data.append("title", options.title);
  data.append("description", options.description);
  data.append("category", options.category);
  data.append("position", options.pose);
  data.append("frame", options.totalFrame);
  data.append("playTime", options.duration);
  data.append("files[0]", options.video);
  data.append("files[1]", options.skeleton);

  for (const [key, value] of data.entries()) {
    console.log(key, ":", value);
  }

  console.log(options.video);
  console.log(options.skeleton);

  const response = await axios.post("/video/create", data);
  return response.data;
}

function toVideoSchema(data) {
  return {
    id: data.vno,
    title: data.title,
    description: data.description,
    category: data.category,
    position: data.position,
    time: data.playTime,
    videoURL: data.videoURL,
    thumbnailURL: data.thumbnailURL,
  };
}

export async function removeVideo(id) {
  const axios = getSpringAxios();

  const response = await axios.delete("/video/delete/" + id);
  return response.data;
}

window.removeVideo = removeVideo;

export async function listVideo() {
  const axios = getSpringAxios();

  const response = await axios.get("/video/list");

  if (response.data.dtoList !== null) {
    response.data.dtoList = response.data.dtoList.map(toVideoSchema);
  } else {
    response.data.dtoList = [];
  }

  return response.data;
}

function toProgramSchema(data) {
  return {
    id: data.vno,
    title: data.title,
    description: data.description,
    url: data.videoURL,
  };
}

export async function getVideo(id) {
  const axios = getSpringAxios();

  const response = await axios.get("/video/" + id);
  return toProgramSchema(response.data);
}

export async function getSkeletons(formData) {
  const axios = getAIAxios();

  const response = await axios.post("/videoRegister", formData);
  return response.data;
}

export async function getMetrics(formData) {
  const axios = getAIAxios();

  const response = await axios.post("/getMetricsConsumer", formData);
  return response.data;
}
