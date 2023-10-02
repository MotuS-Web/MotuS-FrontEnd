import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useState} from 'react';
import ExerciseModal from './ExerciseModal';

const CourseCardContainer = styled.div`
  width: 360px;
  height: 310px;
`;


const CourseImage = styled.div`
  height: 240px;
  width: 360px;
  background-image: url(${props => props.image});
  background-size: cover;
  position: relative;
  margin-bottom: 10px;
`;


const TimeInfo = styled.div`
  width: 57px;
  height: 23px;
  background-color: rgba(14, 13, 13, 0.8);
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimeText = styled.span`
  color: #F2F2F2;
  font-size: 12px;
`;

const CourseTitle = styled.span`
  font-size: 20px;
  color: #F2F2F2;
`;

const TagButton = styled.span`
  margin-top: 10px;
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
`;

const Hash = styled.span`
  color: #727272;
`;

const ExerciseCard = ({ image, title, tags, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (e) => {
    e.stopPropagation();  
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CourseCardContainer onClick={handleCardClick}>
        <CourseImage image={image}>
          <TimeInfo>
            <TimeText>00:00</TimeText>
          </TimeInfo>
        </CourseImage>
        <CourseTitle>{title}</CourseTitle>
        <div>
          {tags && tags.map((tag, index) => (
            <TagButton key={index}>
              <Hash>#</Hash>
              {tag}
            </TagButton>
          ))}
        </div>
      </CourseCardContainer>
      {isModalOpen && (
        <ExerciseModal
          video={image}
          title={title}
          description={description}
          tags={tags}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

ExerciseCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default ExerciseCard;
