import styled from "styled-components";
import Iconupload from "../../assets/icons/iconupload.png";

const ButtonContainer = styled.button`
  padding: 12px 24px;
  background-color: #6968cc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  gap: 8px;
`;

const ButtonIcon = styled.img`
  width: 27px;
  height: 18px;
`;

const ButtonText = styled.span`
  font-size: 16px;
  color: #f2f2f2;
`;

const UploadButton = ({ ...props }) => {
  return (
    <ButtonContainer {...props}>
      <ButtonIcon src={Iconupload} alt="Upload Icon" />
      <ButtonText>영상 게시하기</ButtonText>
    </ButtonContainer>
  );
};

export default UploadButton;
