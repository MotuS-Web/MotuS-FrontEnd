import styled from "styled-components";
import Header from "../components/Header";
import FilterButtons from "../components/FilterButtons";
import ExerciseList from "../components/ExerciseList";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 50px;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: -10px;
  margin-left: -500px;
  margin-bottom: 20px;
`;

const MainPage = () => {
  return (
    <PageContainer>
      <Header />
      <CenteredContainer>
        <FilterGroup>
          <FilterButtons />
        </FilterGroup>
        <ExerciseList />
      </CenteredContainer>
    </PageContainer>
  );
};

export default MainPage;
