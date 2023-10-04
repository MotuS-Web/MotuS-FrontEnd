import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import styled from "styled-components";
import LogoImage from "../assets/icons/LOGO.png";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  margin: 24px auto;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Logo = styled.img``;

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo" />
      <SearchBar />
      <UploadButton onClick={() => navigate("/register")} />
    </HeaderContainer>
  );
};

export default Header;
