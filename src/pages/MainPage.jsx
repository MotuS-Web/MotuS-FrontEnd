import styled from "styled-components";
import Header from "../components/Header";
import FilterButtons from "../components/FilterButtons";
import ExerciseList from "../components/ExerciseList";

const PageContainer = styled.div`
  width: 1200px;
  padding-bottom: 64px;
  margin: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MainPage = () => {
  return (
    <PageContainer>
      <Header />
      <FilterButtons />
      <ExerciseList />
    </PageContainer>
  );
};

export default MainPage;
