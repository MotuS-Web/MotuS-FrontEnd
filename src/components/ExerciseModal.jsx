import PropTypes from "prop-types";
import styled from "styled-components";
import Tag from "./Tag.jsx";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

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

  visibility: hidden;
  opacity: 0;

  transition: opacity 0.2s;

  &.visible {
    visibility: visible;
    opacity: 1;
  }
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

  transition: transform 0.2s ease;

  &:not(.visible) {
    transform: scale(0.9);
  }
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

const Button = styled.button`
  padding: 10px 24px;
  background-color: ${(props) => (props.type ? "#6968CC" : "#f2f2f2")};
  color: ${(props) => (props.type ? "#f2f2f2" : "#242424")};
  border-radius: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => (props.type ? "#4e4bae" : "#c6c6c6")};
  }
`;

const ExerciseModal = ({
  visible,
  id,
  video,
  title,
  description,
  tags,
  onClose,
}) => {
  const navigate = useNavigate();
  return (
    <ModalOverlay className={classNames({ visible })}>
      <ModalContainer className={classNames({ visible })}>
        <VideoPlaceholder></VideoPlaceholder>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <BottomContainer>
          <TagTitle># 관련 태그</TagTitle>
          <Tag style={{ flexGrow: 1 }} list={tags} />
          <Button type={true} onClick={() => navigate("/program/" + id)}>
            수강하기
          </Button>
          <Button onClick={onClose}>닫기</Button>
        </BottomContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

ExerciseModal.propTypes = {
  visible: PropTypes.bool,
  video: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  onClose: PropTypes.func,
};

ExerciseModal.defaultProps = {
  tags: [],
};

export default ExerciseModal;
