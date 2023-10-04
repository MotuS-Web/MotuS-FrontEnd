import styled from "styled-components";
import LogoImage from "../assets/icons/LOGO.png";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  margin: 24px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Logo = styled.img``;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #f2f2f2;
  flex-grow: 1;
`;

const AddHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo" />
      <Title>영상 게시하기</Title>
      <BackButton onClick={() => navigate("/")} />
    </HeaderContainer>
  );
};

export default AddHeader;
