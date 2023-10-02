import AddHeader from "../components/AddHeader";
import VideoUploader from "../components/VideoUploader";
import styled from "styled-components";
import {useState} from "react";

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

const Title = styled.h1`
  font-size: 24px;
  color: #FFFFFF;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left:-300px;
`;

const TextContainer = styled.div`
  margin-left: 20px;
`;

const StyledInput = styled.input`
  width: 600px;
  height: 50px;
  margin-top: 10px;
  background-color: #242424;
  border-radius: 10px;
  border: 1px solid #444444;
  padding: 10px;
  margin-bottom: 20px;
`;

const StyledTextarea = styled.textarea`
  width: 600px;
  height: 120px;
  margin-top: 10px;
  background-color: #242424;
  border-radius: 10px;
  border: 1px solid #444444;
  padding: 10px;
`;

const TitleText = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 24px;
  color: #FFFFFF;
  margin-bottom: 10px;
`;

const AddExercise = () => {
  const [title, setTitle] = useState("");
  const [description, setDesctiption] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDesctiption(e.target.value);
  };
  return (
    <div>
      <PageContainer>
      <AddHeader />
      <CenteredContainer>
      <Title>동영상 및 스켈레톤 데이터</Title>
      <VideoUploader/>
      <TextContainer>
          <TitleText>운동 제목</TitleText>
          <StyledInput
            placeholder="제목을 입력하세요..."
            maxLength={50}
            value={title}
            onChange={handleTitleChange}
          />
          <TitleText>운동 설명</TitleText>
          <StyledTextarea
            placeholder="설명을 입력하세요..."
            maxLength={200}
            value={description}
            onChange={handleDescriptionChange}
          />
        </TextContainer>
      </CenteredContainer>
      </PageContainer>
    </div>
  );
};
export default AddExercise;
