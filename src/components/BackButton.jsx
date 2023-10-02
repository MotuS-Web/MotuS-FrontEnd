import styled from 'styled-components';
import BackIcon from '../assets/icons/Page-left.png';

const BackButtonContainer = styled.button`
    width: 210px;
    height: 40px;
    background-color: #FFFFFF;
    border: 1px solid #BBBBBB;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px; 
    margin-top:40px;
    margin-bottom: 10px;
    margin-left: -580px;
`;

const BackImage = styled.img`
  margin-right: 10px;
`;

const BackText = styled.span`
  font-size: 14px;
  color: #000000;
`;

const BackButton = () => {
    return (
        <BackButtonContainer>
            <BackImage src={BackIcon} alt="Back" />
            <BackText>메인페이지로 돌아가기</BackText>
        </BackButtonContainer>
    );
}

export default BackButton;
