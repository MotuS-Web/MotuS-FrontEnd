import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const FilterSection = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Header = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 20px;
  font-weight: 700;
  color: #5f5f5f;

  &::after {
    content: "";
    width: 2px;
    height: 20px;
    background-color: #5f5f5f;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 100%;
  background-color: ${(props) => (props.selected ? "#6968CC" : "#1E1E1E")};
  color: #f2f2f2;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const FilterButtons = ({ all , onChange}) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedPose, setSelectedPose] = useState("전체");

  const [categoryList, setCategoryList] = useState([
    "전체",
    "팔",
    "어깨",
    "무릎",
    "허벅지",
  ]);

  const [poseList, setPoseList] = useState([
    "전체",
    "선",
    "앉은",
    "누운",
  ]);

   const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onChange({ category, pose: selectedPose });
  };

  const handlePoseClick = (pose) => {
    setSelectedPose(pose);
    onChange({ category: selectedCategory, pose });
  };

  useEffect(() => {
    if (!all) {
      setCategoryList(categoryList.filter((item) => item !== "전체"));
      setPoseList(poseList.filter((item) => item !== "전체"));
    }
  }, []);

  return (
    <Container>
           <FilterSection>
        <Header>카테고리</Header>
        {categoryList.map((category) => (
          <Button
            key={category}
            selected={selectedCategory === category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </FilterSection>

      <FilterSection>
        <Header>자세</Header>
        {poseList.map((pose) => (
          <Button
            key={pose}
            selected={selectedPose === pose}
            onClick={() => handlePoseClick(pose)} 
          >
            {pose}
          </Button>
        ))}
      </FilterSection>
    </Container>
  );
};

FilterButtons.propTypes = {
  all: PropTypes.bool,
};

FilterButtons.defaultProps = {
  all: false,
};

export default FilterButtons;
