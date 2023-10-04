import styled from "styled-components";
import BackIcon from "../assets/icons/Page-left.png";

const BackButtonContainer = styled.button`
  padding: 12px 24px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  gap: 8px;
`;

const BackImage = styled.img``;

const BackText = styled.span`
  font-size: 16px;
  color: #000000;
  font-weight: bold;
`;

const BackButton = ({ ...props }) => {
  return (
    <BackButtonContainer {...props}>
      <BackImage src={BackIcon} alt="Back" />
      <BackText>메인페이지로 돌아가기</BackText>
    </BackButtonContainer>
  );
};

export default BackButton;
