import { useState } from "react";
import styled from "styled-components";

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-top: 20px;
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

  &:focus {
    outline: none;
  }
`;

const FilterButtons = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedPose, setSelectedPose] = useState("전체");

  return (
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
              setSelectedPose((current) => (current === pose ? "전체" : pose));
            }}
          >
            {pose}
          </Button>
        ))}
      </FilterSection>
    </div>
  );
};

export default FilterButtons;
