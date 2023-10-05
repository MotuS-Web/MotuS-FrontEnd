import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import FilterButtons from "../components/FilterButtons";
import ExerciseCard from "../components/ExerciseCard";
import ExerciseModal from "../components/ExerciseModal";
import { getPrograms } from "../librarys/exercise-api";

const PageContainer = styled.div`
  width: 1200px;
  padding-bottom: 64px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const ExerciseContainer = styled.div`
  width: 1200px;
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 48px 60px;
`;


const MainPage = () => {
  const [list, setList] = useState([]);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await getPrograms(); 
        if (response && response.dtoList) {
          setList(response.dtoList);
        }
      } catch (error) {
        console.error('운동 목록을 불러오지 못했습니다.', error);
      }
    }
  
    fetchCourses();
  }, []);
  

  function openModal(id) {
    setCourse(list.filter((item) => item.id === id)[0]);
  }

  return (
    <PageContainer>
      <Header />
      <FilterButtons />
      <ExerciseContainer>
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
      </ExerciseContainer>
    </PageContainer>
  );
};

export default MainPage;
