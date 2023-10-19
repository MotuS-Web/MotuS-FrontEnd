import styled from "styled-components";
import LogoImage from "../../assets/logo.png";
import BackButton from "../button/BackButton";
import { useNavigate } from "react-router-dom";

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
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #f2f2f2;
  flex-grow: 1;
`;

const UploadHeader = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo" onClick={() => navigate("/")} />
      <Title>영상 게시하기</Title>
      <BackButton onClick={() => navigate("/")} />
    </HeaderContainer>
  );
};

export default UploadHeader;
