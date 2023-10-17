import styled from "styled-components";
import Iconsearch from "../assets/icons/iconsearch.png";
import PropTypes from 'prop-types';

const SearchContainer = styled.div`
  padding: 14px 16px;
  background-color: #242424;
  border: 1px solid #444444;
  border-radius: 50px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 16px;
  color: #f2f2f2;

  flex-grow: 1;

  &::placeholder {
    color: #c8c8c8;
  }

  &:focus {
    outline: none;
  }
`;

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchIcon src={Iconsearch} alt="Search" />
      <SearchInput
        placeholder="원하는 운동을 검색해보세요!"
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchBar;
