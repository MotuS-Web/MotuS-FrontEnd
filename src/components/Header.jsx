import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import styled from "styled-components";
import LogoImage from "../assets/icons/LOGO.png";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-top: 20px;
  margin-left: 420px;
  margin-right: 10px;
`;

const Spacer = styled.div`
  width: 10px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo" />
      <Spacer />
      <SearchBar/>
      <Spacer />
      <UploadButton />
    </HeaderContainer>
  );
};

export default Header;
