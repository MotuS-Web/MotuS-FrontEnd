import { useState, useEffect } from "react";
import { getAllCourses } from "../librarys/exercise-api";
import ExerciseCard from "../components/ExerciseCard";
import ExerciseModal from "./ExerciseModal.jsx";
import styled from "styled-components";

const Container = styled.div`
  width: 1200px;
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 48px 60px;
`;

function ExerciseList() {
  const [list, setList] = useState([]);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      const data = await getAllCourses();
      setList(data);
    }

    fetchCourses();
  }, []);

  function openModal(id) {
    setCourse(list.filter((item) => item.id === id)[0]);
  }

  return (
    <Container>
      <ExerciseModal
        visible={course}
        onClose={() => setCourse(null)}
        {...course}
      />
      {list.map((course) => (
        <ExerciseCard
          key={course.id}
          onClick={() => openModal(course.id)}
          {...course}
        />
      ))}
    </Container>
  );
}

export default ExerciseList;
