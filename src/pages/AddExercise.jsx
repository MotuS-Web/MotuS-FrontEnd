import Header from "../components/Header";
import VideoUploader from "../components/VideoUploader.jsx";
import styled from "styled-components";
import { useReducer } from "react";
import UploadButton from "../components/UploadButton.jsx";
import Tag from "../components/Tag.jsx";
import { createVideo } from "../librarys/axios.js";
import { useNavigate } from "react-router-dom";
import { intialUploadState, uploadReducer } from "../reducer/upload.js";
import { ReducerContext } from "../librarys/context.js";
import jsondata from "../librarys/data.js";

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
  color: #f2f2f2;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  color: #f2f2f2;
  background-color: #242424;
  border-radius: 10px;
  border: 1px solid #444444;
  padding: 10px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  color: #f2f2f2;
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
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(uploadReducer, intialUploadState);
  const { title, description, video } = state;

  const handleChange = (type) => {
    return (e) => dispatch({ type, payload: e.target.value });
  };

  const handleTagChange = ({ category, pose }) => {
    dispatch({
      type: "tag",
      payload: [category, pose],
    });
  };

  async function upload() {
    if (video === null) {
      alert("동영상을 업로드해주세요.");
      return;
    }

    // if (skeleton === null) {
    //   alert("동영상의 처리가 완료될 때까지 기다려주세요.");
    //   return;
    // }

    if (title.length < 1) {
      alert("제목을 2자 이상 입력해주세요.");
      return;
    }

    if (description.length < 1) {
      alert("설명을 2자 이상 입력해주세요.");
      return;
    }

    const dummy = {
      error: "테스트 데이터입니다.",
      video_length: "0",
    };

    const blob = new Blob([JSON.stringify(jsondata)], {
      type: "application/json",
    });

    const options = {
      ...state,
      totalFrame: parseInt(jsondata.video_length),
      skeleton: blob,
    };

    console.log([JSON.stringify(jsondata)]);

    const programResponse = await createVideo(options);
    console.log(programResponse);

    alert("비디오를 성공적으로 게시했습니다.");
    navigate("/");
  }

  return (
    <ReducerContext.Provider value={[state, dispatch]}>
      <PageContainer>
        <Header isAddHeader={true} />
        <Row>
          <Column>
            <Title>동영상 및 AI 스켈레톤 데이터</Title>
            <VideoUploader />
          </Column>
          <Column>
            <Title>운동 제목</Title>
            <StyledInput
              placeholder="제목을 입력하세요..."
              maxLength={50}
              value={title}
              onChange={handleChange("title")}
            />
            <Title>운동 설명</Title>
            <StyledTextarea
              placeholder="설명을 입력하세요..."
              maxLength={200}
              value={description}
              onChange={handleChange("description")}
            />
            <Title>태그</Title>
            <Tag selectable={true} />
            <UploadButtonContainer>
              <UploadButton onClick={upload} />
            </UploadButtonContainer>
          </Column>
        </Row>
      </PageContainer>
    </ReducerContext.Provider>
  );
};
export default AddExercise;
