import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 16px;
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

const FilterButtons = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedPose, setSelectedPose] = useState("전체");

  return (
    <Container>
      <FilterSection>
        <Header>카테고리</Header>
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
        <Header>자세</Header>
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
    </Container>
  );
};

export default FilterButtons;
