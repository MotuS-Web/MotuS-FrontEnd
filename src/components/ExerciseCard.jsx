import styled from "styled-components";
import PropTypes from "prop-types";
import Thumbnail from "./Thumbnail.jsx";
import Tag from "./Tag.jsx";

const CourseCardContainer = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  background-color: #ffffff00;
  outline: 8px solid #ffffff00;
  transition:
    outline 0.2s,
    background-color 0.2s;

  &:hover {
    outline: 24px solid #ffffff1f;
    background-color: #ffffff1f;
  }
`;

const CourseTitle = styled.p`
  font-size: 20px;
  color: #f2f2f2;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 500;
`;

const ExerciseCard = ({ id, thumbnailURL, title, tags, onClick, time }) => {
  return (
    <CourseCardContainer onClick={() => onClick(id)}>
      <Thumbnail src={thumbnailURL} time={time} />
      <CourseTitle>{title}</CourseTitle>
      <Tag list={tags} />
    </CourseCardContainer>
  );
};

ExerciseCard.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnailURL: PropTypes.string,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ExerciseCard;
