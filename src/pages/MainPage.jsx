import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import FilterButtons from "../components/FilterButtons";
import ExerciseCard from "../components/ExerciseCard";
import ExerciseModal from "../components/ExerciseModal";
import { getPrograms } from "../librarys/exercise-api";
import { CATEGORY, POSITION } from "../librarys/type";

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await getPrograms();
        console.log("API 응답 결과:", response);
        if (response && response.dtoList) {
          setList(response.dtoList);
        }
      } catch (error) {
        console.error("운동 목록을 불러오지 못했습니다.", error);
      }
    }
    fetchCourses();
  }, []);

  function openModal(vno) {
    const selectedCourse = list.find((item) => item.vno === vno);
    if (selectedCourse) {
      const tags = [selectedCourse.category, selectedCourse.posture].map(
        convertToKoreanTag
      );
      selectedCourse.tags = tags;
      setCourse(selectedCourse);
    } else {
      console.error('선택된 강좌를 찾을 수 없습니다. vno:', vno);
    }
  }

  useEffect(() => {
    console.log("현재 course 상태:", course);
  }, [course]);

  function convertToKoreanTag(tag) {
    for (const category of CATEGORY) {
      if (tag === category.key) return category.value;
    }

    for (const position of POSITION) {
      if (tag === position.key) return position.value;
    }

    return tag;
  }

  return (
    <PageContainer>
      <Header />
      <FilterButtons />
      <ExerciseContainer>
        {console.log(course)}
        <ExerciseModal
          key={course ? course.vno : 'initial-key'}
          visible={isModalVisible}
          onClose={() => {
            setIsModalVisible(false);
            setCourse(null);
          }}
          {...course}
        />
        {list.map((course) => {
          const tags = [course.category, course.posture];
          return (
            <ExerciseCard
              key={course.vno}
              onClick={() => openModal(course.vno)}
              tags={tags}
              {...course}
            />
          );
        })}
      </ExerciseContainer>
    </PageContainer>
  );

};

export default MainPage;
