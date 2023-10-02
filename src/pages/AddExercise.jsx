import AddHeader from "../components/AddHeader";
import VideoUploader from "../components/VideoUploader";
import styled from "styled-components";

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


const AddExercise = () => {
  return (
    <div>
      <PageContainer>
      <AddHeader />
      <CenteredContainer>
      <VideoUploader/>
      </CenteredContainer>
      </PageContainer>
    </div>
  );
};
export default AddExercise;
