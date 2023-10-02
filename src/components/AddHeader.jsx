import styled from "styled-components";
import LogoImage from "../assets/icons/LOGO.png";
import BackButton from "./BackButton";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:-10px;
`;

const Logo = styled.img`
  margin-top: 20px;
  margin-left: 420px;
  margin-right: 10px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #F2F2F2;
  margin-left: 10px;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  margin-left: 1125px;
`;

const AddHeader = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo" />
      <Title>영상 등록하기</Title>
      <ButtonContainer>
        <BackButton/>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default AddHeader;
