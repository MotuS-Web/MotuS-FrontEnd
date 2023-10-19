import styled from "styled-components";
import LogoImage from "../../assets/icons/LOGO.png";
import BackButton from "../button/BackButton";
import SearchBar from "./SearchBar";
import UploadButton from "../button/UploadButton";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const HeaderContainer = styled.div`
  width: 100%;
  margin: 24px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Logo = styled.img`
  height: 60px;
  object-fit: contain;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #f2f2f2;
  flex-grow: 1;
`;

const Header = ({ isAddHeader = false, onSearch }) => { 
  const navigate = useNavigate();

  if (isAddHeader) {
    return (
      <HeaderContainer>
        <Logo src={LogoImage} alt="Logo" />
        <Title>영상 게시하기</Title>
        <BackButton onClick={() => navigate("/")} />
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo" />
      <SearchBar onSearch={onSearch} />  
      <UploadButton onClick={() => navigate("/register")} />
    </HeaderContainer>
  );
};

Header.propTypes = {
  isAddHeader: PropTypes.bool,
  onSearch: PropTypes.func,
};

export default Header;
