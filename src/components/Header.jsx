import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import styled from "styled-components";
import LogoImage from "../assets/icons/LOGO.png";

const HeaderContainer = styled.div`
  width: 100%;
  margin: 24px auto;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Logo = styled.img``;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo" />
      <SearchBar />
      <UploadButton />
    </HeaderContainer>
  );
};

export default Header;
