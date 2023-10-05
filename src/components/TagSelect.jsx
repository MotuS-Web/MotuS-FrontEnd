import { useContext, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CATEGORY, POSITION } from "../librarys/type";
import { ReducerContext } from "../librarys/context.js";

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

const TagSelect = () => {
  const [state, dispatch] = useContext(ReducerContext);
  const { category, pose } = state;

  function onClick(type, payload) {
    dispatch({
      type,
      payload,
    });
  }

  return (
    <Container>
      <FilterSection>
        <Header>카테고리</Header>
        {CATEGORY.map(({ key, value }) => (
          <Button
            key={key}
            selected={category === key}
            onClick={() => onClick("category", key)}
          >
            {value}
          </Button>
        ))}
      </FilterSection>

      <FilterSection>
        <Header>자세</Header>
        {POSITION.map(({ key, value }) => (
          <Button
            key={key}
            selected={pose === key}
            onClick={() => onClick("pose", key)}
          >
            {value} 자세
          </Button>
        ))}
      </FilterSection>
    </Container>
  );
};

TagSelect.propTypes = {
  onChange: PropTypes.func,
};

export default TagSelect;
