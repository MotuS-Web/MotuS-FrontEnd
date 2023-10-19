import arms from "../assets/images/arms-up.webp";
import knee from "../assets/images/knee.webp";
import shoulder from "../assets/images/shoulder-up.webp";
import thigh from "../assets/images/thigh.webp";
import { getSpringAxios } from "./axios.js";
import { CATEGORY, POSITION } from '../librarys/type'


const axios = getSpringAxios();

const images = [arms, knee, shoulder, thigh];



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export async function getAllCourses() {
  return JSON.parse(JSON.stringify(courseList));
}

export async function getCoursesByCategory(category) {
  return JSON.parse(
    JSON.stringify(
      courseList.filter((course) => course.tags.includes(category)),
    ),
  );
}

export async function getCoursesByPosture(posture) {
  return JSON.parse(
    JSON.stringify(
      courseList.filter((course) => course.tags.includes(posture)),
    ),
  );
}

export const getCourseFromLocal = (id) => {
  const coursesFromLocalStorage =
    JSON.parse(localStorage.getItem("courses")) || [];
  const allCourses = [...courseList, ...coursesFromLocalStorage];

  const course = allCourses.find((course) => course.id === id);

  return course || null;
};

function toExerciseSchema(data) {
  return {
    id: data.vno,
    title: data.title,
    description: data.description,
    category: data.category,
    position: data.position,
    time: data.playTime,
    videoURL: data.videoURL,
    thumbnailURL: data.thumbnailURL,
    image: images[data.vno % images.length],
  };
}

export async function getPrograms(page, size) {
  const params = {
  page,
  size
  };

  const response = await axios.get("/video/list", { params });
  response.data.dtoList = response.data.dtoList.map(toExerciseSchema);
  return response.data;
}

export function convertToEnglishTag(tagValue, typeArray) {
  const matchedType = typeArray.find(type => type.value === tagValue);
  return matchedType ? matchedType.key : undefined;
}

export async function searchPrograms(title, category, position, page=1, size=6) {
  const params = {
    title: title ? title : undefined,
    category,
    position,
    page,
    size
  };

  const response = await axios.get("/video/list", { params });
  response.data.dtoList = response.data.dtoList.map(toExerciseSchema);
  return response.data;
}


export async function getCourse(id, mid) {
  const response = await axios.get(`/video/${id}/${mid}`);

  return toExerciseSchema(response.data);
}

export async function getProgramDetail(id) {
  try {
    const response = await fetch(`http://motus.website/video/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
  }
}
