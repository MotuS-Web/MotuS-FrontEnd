import axios from "./axios.js";

function toProgramSchema(data) {
  return {
    id: data.vno,
    title: data.title,
    description: data.description,
    url: data.videoURL,
  };
}

export async function getVideo(id) {
  const response = await axios.get(`/video/${id}`);
  return toProgramSchema(response.data);
}
