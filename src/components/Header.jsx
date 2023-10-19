import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import styled from "styled-components";
import LogoImage from "../assets/icons/LOGO.png";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderContainer = styled.div`
  width: 100%;
  margin: 24px auto;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Logo = styled.img`
  height: 60px;
  object-fit: contain;
  cursor: pointer;
`;

const Header = ({ onSearch }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo" onClick={() => navigate("/")} />
      <SearchBar onSearch={onSearch} />
      <UploadButton onClick={() => navigate("/register")} />
    </HeaderContainer>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
