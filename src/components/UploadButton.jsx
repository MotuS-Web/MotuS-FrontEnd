import styled from 'styled-components';
import Iconupload from '../assets/icons/iconupload.png';

const ButtonContainer = styled.button`
  width: 170px;
  height: 44px;
  background-color: #6968CC;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: none;
  padding: 0 10px; 
  cursor: pointer;
`;

const ButtonIcon = styled.img`
  width: 20px;
  height: 20px; 
  margin-right: 10px; 
`;

const ButtonText = styled.span`
  font-size: 16px;
  color: #F2F2F2;
`;

const UploadButton = () => {
  return (
    <ButtonContainer>
      <ButtonIcon src={Iconupload} alt="Upload Icon" />
      <ButtonText>영상 게시하기</ButtonText>
    </ButtonContainer>
  );
};

export default UploadButton;
