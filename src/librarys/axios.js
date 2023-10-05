import axios from "axios";

export default axios.create({
  baseURL: "http://motus.website/",
  timeout: 10000,
});

export function getSpringAxios(token = null) {
  const options = {
    baseURL: "http://motus.website/",
    timeout: 10000,
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
    baseURL: "http://10.50.228.23:8000/",
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

  const response = await axios.post("/video/create", data);
  return response.data;
}

export async function removeVideo(id) {
  const axios = getSpringAxios();

  const response = await axios.delete("/video/delete/" + id);
  return response.data;
}

export async function listVideo() {
  const axios = getSpringAxios();

  const response = await axios.get("/video/list");
  return response.data;
}

export async function getVideo(id) {
  const axios = getSpringAxios();

  const response = await axios.get("/video/" + id);
  return response.data;
}
