import styled from "styled-components";
import Tag from "./Tag";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 700px;
  margin-top: 120px;
  background-color: #242424;
  border-radius: 10px;
  padding: 24px 36px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 12px;
`;

const VideoPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 3 / 2;
  background-color: #5f5f5f;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #f2f2f2;
  font-family: "SUIT Variable", sans-serif;
`;

const Description = styled.p`
  height: 80px;
  font-size: 16px;
  color: #f2f2f2;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const TagTitle = styled.span`
  font-size: 20px;
  color: #5f5f5f;
  font-family: "SUIT Variable", sans-serif;
`;

const EnrollButton = styled.button`
  padding: 10px 24px;
  background-color: #6968cc;
  color: #f1f1f1;
  font-size: 16px;
  border-radius: 10px;
  border: none;
`;

const CloseButton = styled.button`
  padding: 10px 24px;
  background-color: #f2f2f2;
  color: #242424;
  font-size: 16px;
  border-radius: 10px;
  border: none;
`;

const ExerciseModal = ({ video, title, description, tags, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <VideoPlaceholder></VideoPlaceholder>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <BottomContainer>
          <TagTitle># 관련 태그</TagTitle>
          <Tag style={{ flexGrow: 1 }} list={tags} />
          <EnrollButton>수강하기</EnrollButton>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </BottomContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ExerciseModal;
