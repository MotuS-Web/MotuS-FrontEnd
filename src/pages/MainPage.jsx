import styled from 'styled-components';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';

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

const MainPage = () => {
  return (
    <PageContainer>
      <Header/>
      <CenteredContainer>
      <FilterButtons/>
      </CenteredContainer>
    </PageContainer>
  );
}

export default MainPage;
