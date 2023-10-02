import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 700px;
  height: 650px;
  background-color: #242424;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

const VideoPlaceholder = styled.div`
  width: 630px;
  height: 400px;
  background-color: #5F5F5F; 
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #F2F2F2;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #F2F2F2;
  font-weight: 200;
  margin-bottom: 20px;
`;

const TagTitle = styled.span`
  font-size: 20px;
  color: #5F5F5F;
`;

const TagButton = styled.span`
  margin-top: 80px;
  height: 28px;
  padding: 0 10px;
  background-color: #242424;
  border-radius: 50px;
  border: 1px solid #444444;
  font-size: 16px;
  color: #F2F2F2;
  margin-right: 5px;
  display: inline-flex;
  align-items: center;
  margin-left: 10px;
`;

const ButtonGroup = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

const EnrollButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #6968CC;
  color: #F1F1F1;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  margin-right: 10px;
`;

const CloseButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #F2F2F2;
  color: #242424;
  font-size: 16px;
  border-radius: 10px;
  border: none;
`;

const Hash = styled.span`
  color: #727272;
`;

const ExerciseModal = ({ video, title, description, tags, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <VideoPlaceholder></VideoPlaceholder>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <div>
          <TagTitle># 관련 태그</TagTitle>
          {tags.map((tag, index) => (
            <TagButton key={index}>
              <Hash>#</Hash> 
              {tag}
              </TagButton>
          ))}
        </div>
        <ButtonGroup>
          <EnrollButton>수강하기</EnrollButton>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default  ExerciseModal ;