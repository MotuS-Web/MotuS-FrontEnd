import AddHeader from "../components/AddHeader.jsx";
import VideoUploader from "../components/VideoUploader.jsx";
import styled from "styled-components";
import { useState } from "react";
import UploadButton from "../components/UploadButton.jsx";
import FilterButtons from "../components/FilterButtons.jsx";

const PageContainer = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 540px auto;
  margin-top: 50px;
  gap: 48px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Title = styled.h1`
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: #242424;
  border-radius: 10px;
  border: 1px solid #444444;
  padding: 10px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  background-color: #242424;
  border-radius: 10px;
  border: 1px solid #444444;
  padding: 10px;
  resize: none;
`;

const UploadButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  justify-self: flex-end;
  align-self: flex-end;
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
        <Row>
          <Column>
            <Title>동영상 및 스켈레톤 데이터</Title>
            <VideoUploader />
          </Column>
          <Column>
            <Title>운동 제목</Title>
            <StyledInput
              placeholder="제목을 입력하세요..."
              maxLength={50}
              value={title}
              onChange={handleTitleChange}
            />
            <Title>운동 설명</Title>
            <StyledTextarea
              placeholder="설명을 입력하세요..."
              maxLength={200}
              value={description}
              onChange={handleDescriptionChange}
            />
            <Title>카테고리 및 태그</Title>
            <FilterButtons all={false} />
            <UploadButtonContainer>
              <UploadButton />
            </UploadButtonContainer>
          </Column>
        </Row>
      </PageContainer>
    </div>
  );
};
export default AddExercise;
