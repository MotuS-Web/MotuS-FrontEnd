import { styled } from "styled-components";

import Modal from "../Modal.jsx";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { hide } from "../../redux/modalSlice.js";

const Container = styled.div`
  min-height: 180px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  font-family: "SUIT Variable";
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0 24px;
`;

const Text = styled.li`
  margin: 12px 0;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 18px 0;
  border: none;
  font-size: 18px;
  color: #f2f2f2;
  background-color: #6968cc;

  transition: background-color 0.2s;

  &:hover {
    background-color: #4e4bae;
  }

  cursor: pointer;
`;

const id = "startup_notice";

const StartupModal = () => {
  const dispatch = useDispatch();
  return (
    <Modal id={id}>
      <Container>
        <Title>안내사항</Title>
        <List>
          <Text>본 과정은 사용자의 신체 녹화를 필요로 합니다.</Text>
          <Text>
            현재 기기에 카메라가 없다면, 웹캠과 같은 외부 카메라를 연결한 다음
            본 페이지를 새로고침하세요.
          </Text>
          <Text>
            브라우저가 카메라 권한을 요구하는 경우, 허용을 눌러주세요.
          </Text>
          <Text>카메라가 준비되었으면, 확인을 눌러서 시작하세요.</Text>
        </List>
      </Container>
      <Button onClick={() => dispatch(hide(id))}>확인</Button>
    </Modal>
  );
};

export default StartupModal;
