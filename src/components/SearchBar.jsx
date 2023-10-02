import styled from 'styled-components';
import Iconsearch from '../assets/icons/iconsearch.png';

const SearchContainer = styled.div`
  width: 750px;   
  height: 50px;     
  background-color: #242424;  
  border: 1px solid #444444;  
  border-radius: 50px;  
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.img`
  width: 20px; 
  height: 20px;
  margin-left: 10px;
`;

const SearchInput = styled.input`
  width: calc(100% - 40px); 
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: #000;
  padding-left: 10px; 
  &::placeholder {
    color: #C8C8C8;
  }
  &:focus {
    outline: none;
  }
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIcon src={Iconsearch} alt="Search" />
      <SearchInput placeholder="원하는 운동을 검색해보세요!" />
    </SearchContainer>
  );
};

export default SearchBar;
