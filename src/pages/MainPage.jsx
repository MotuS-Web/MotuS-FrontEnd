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
        console.log("API 응답 결과 dtoList:", response.dtoList);
        if (response && response.dtoList) {
          setList(response.dtoList);
        }
      } catch (error) {
        console.error("운동 목록을 불러오지 못했습니다.", error);
      }
    }
    fetchCourses();
  }, []);

  function openModal(id) {
    try {
      const selectedCourse = list.find((course) => course.id === Number(id));
      if (selectedCourse) {
        const tags = [selectedCourse.category, selectedCourse.position].map(
          convertToKoreanTag,
        );
        selectedCourse.tags = tags;
        setCourse(selectedCourse);
        setIsModalVisible(true);
      } else {
        console.error("선택된 강좌를 찾을 수 없습니다. id:", id);
      }
    } catch (error) {
      console.error("강좌 상세 정보를 가져오는 중 오류 발생:", error);
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

 
  const [selectedFilters, setSelectedFilters] = useState({
    category: "전체",
    pose: "전체",
  });

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  const filteredList = list.filter((courseItem) => {
    const matchesCategory =
      selectedFilters.category === "전체" ||
      convertToKoreanTag(courseItem.category) === selectedFilters.category;
    const matchesPose =
      selectedFilters.pose === "전체" ||
      convertToKoreanTag(courseItem.position) === selectedFilters.pose;

    return matchesCategory && matchesPose;
  });


  return (
    <PageContainer>
      <Header />
      <FilterButtons onChange={handleFilterChange} />
      <ExerciseContainer>
        {course && (
          <ExerciseModal
            key={course.id}
            visible={isModalVisible}
            onClose={() => {
              setIsModalVisible(false);
              setCourse(null);
            }}
            {...course}
          />
        )}
         {filteredList.map((courseItem) => {
          const tags = [
            convertToKoreanTag(courseItem.category),
            convertToKoreanTag(courseItem.position),
          ];
          return (
            <ExerciseCard
              key={courseItem.id}
              onClick={() => openModal(courseItem.id)}
              tags={tags}
              {...courseItem}
            />
          );
        })}
      </ExerciseContainer>
    </PageContainer>
  );
};

export default MainPage;
