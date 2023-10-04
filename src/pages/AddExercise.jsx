import AddHeader from "../components/AddHeader";
import VideoUploader from "../components/VideoUploader";
import styled from "styled-components";
import { useState } from "react";
import UploadButton from "../components/UploadButton";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  flex: 1;
  margin-top: 50px;
  width: 1200px;
  padding: 0 20px;
`;

const TitleA = styled.h1`
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: -300px;
`;

const TextContainer = styled.div`
  margin-left: 20px;
`;

const StyledInput = styled.input`
  width: 650px;
  height: 50px;
  margin-top: 10px;
  background-color: #242424;
  border-radius: 10px;
  border: 1px solid #444444;
  padding: 10px;
  margin-bottom: 20px;
`;

const StyledTextarea = styled.textarea`
  width: 650px;
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
  color: #ffffff;
  margin-bottom: 10px;
`;

const TitleC = styled.h2`
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: -470px;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 850px;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  margin-right: 10px;
  margin-top: 20px;
  margin-left: -10px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #5f5f5f;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 10px;
`;

const Divider = styled.div`
  width: 2px;
  height: 20px;
  background-color: #5f5f5f;
  margin-right: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 36px;
  background-color: ${(props) => (props.selected ? "#6968CC" : "#1E1E1E")};
  color: #f2f2f2;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  margin-right: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => (props.selected ? "#7c7aca" : "#343434")};
  }
`;

const UploadButtonContainer = styled.div`
  margin-top: 20px;
  margin-left: 520px;
`;

const AddExercise = () => {
  const [title, setTitle] = useState("");
  const [description, setDesctiption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedPose, setSelectedPose] = useState("전체");

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
          <LeftContainer>
            <TitleA>동영상 및 스켈레톤 데이터</TitleA>
            <VideoUploader />
          </LeftContainer>
          <RightContainer>
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
            <TitleC>카테고리 및 태그</TitleC>
            <div>
              <FilterSection>
                <Title>카테고리</Title>
                <Divider />
                {["전체", "팔", "어깨", "무릎", "허벅지"].map((category) => (
                  <Button
                    key={category}
                    selected={selectedCategory === category}
                    onClick={() => {
                      setSelectedCategory((current) =>
                        current === category ? "전체" : category,
                      );
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </FilterSection>

              <FilterSection>
                <Title>자세</Title>
                <Divider />
                {["전체", "선 자세", "앉은 자세", "누운 자세"].map((pose) => (
                  <Button
                    key={pose}
                    selected={selectedPose === pose}
                    onClick={() => {
                      setSelectedPose((current) =>
                        current === pose ? "전체" : pose,
                      );
                    }}
                  >
                    {pose}
                  </Button>
                ))}
              </FilterSection>
            </div>
            <UploadButtonContainer>
              <UploadButton />
            </UploadButtonContainer>
          </RightContainer>
        </CenteredContainer>
      </PageContainer>
    </div>
  );
};
export default AddExercise;
