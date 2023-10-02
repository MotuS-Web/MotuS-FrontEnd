import { useState, useEffect } from "react";
import { getAllCourses } from "../librarys/exercise-api";
import ExerciseCard from "../components/ExerciseCard";
import styled from "styled-components";

const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px; 
  margin-top: 20px;
  margin-left:10px;
`;

function ExerciseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const data = await getAllCourses();
      setCourses(data);
    }

    fetchCourses();
  }, []);

  return (
    <Container>
      {courses.map((course) => (
        <ExerciseCard key={course.id} {...course} />
      ))}
    </Container>
  );
}

export default ExerciseList;
