import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import FilterButtons from "../components/button/FilterButtons";
import ExerciseCard from "../components/exercise/ExerciseCard";
import ExerciseModal from "../components/exercise/ExerciseModal";
import Pagination from "../components/pagnation/Pagination";
import { getPrograms, searchPrograms , convertToEnglishTag } from "../librarys/exercise-api";
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

//페이지네이션 적용을 위해
const ITEMS_PER_PAGE = 6;

const MainPage = () => {
  const [list, setList] = useState([]);
  const [course, setCourse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    category: "전체",
    pose: "전체",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = async (term) => {
    setSearchTerm(term);
    
    const englishCategory = convertToEnglishTag(selectedFilters.category, CATEGORY);
    const englishPose = convertToEnglishTag(selectedFilters.pose, POSITION);
    
    const response = await searchPrograms(term, englishCategory, englishPose);
    if (response && response.dtoList) {
      setList(response.dtoList);
    }
  };

  useEffect(() => {
    async function fetchCourses() {
      const response = await getPrograms();
      if (response && response.dtoList) {
        setList(response.dtoList);
      }
    }
    fetchCourses();
  }, []);

  function openModal(id) {
    const selectedCourse = list.find((course) => course.id === Number(id));
    if (selectedCourse) {
      const tags = [selectedCourse.category, selectedCourse.position].map(
        convertToKoreanTag,
      );
      selectedCourse.tags = tags;
      setCourse(selectedCourse);
      setIsModalVisible(true);
    }
  }

  function convertToKoreanTag(tag) {
    for (const category of CATEGORY) {
      if (tag === category.key) return category.value;
    }
    for (const position of POSITION) {
      if (tag === position.key) return position.value;
    }
    return tag;
  }

  const handleFilterChange = async (filters) => {
    setSelectedFilters(filters);
    
    const englishCategory = convertToEnglishTag(filters.category, CATEGORY);
    const englishPose = convertToEnglishTag(filters.pose, POSITION);
    
    const response = await searchPrograms(searchTerm, englishCategory, englishPose);
    if (response && response.dtoList) {
      setList(response.dtoList);
    }
  };

  const filteredList = list.filter((courseItem) => {
    const matchesCategory =
      selectedFilters.category === "전체" ||
      convertToKoreanTag(courseItem.category) === selectedFilters.category;
    const matchesPose =
      selectedFilters.pose === "전체" ||
      convertToKoreanTag(courseItem.position) === selectedFilters.pose;
    const matchesSearchTerm = !searchTerm || courseItem.name.includes(searchTerm); 
    return matchesCategory && matchesPose && matchesSearchTerm;
  });

  const displayedItems = filteredList.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);
  
  

  return (
    <PageContainer>
      <Header onSearch={handleSearch} />
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
        {displayedItems.map((courseItem) => {
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
      <Pagination
        totalItems={filteredList.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onChange={handlePageChange}
      />
    </PageContainer>
  );
};

export default MainPage;
