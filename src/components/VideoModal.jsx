import PropTypes from "prop-types";
import styled from "styled-components";
import Tag from "./exercise/Tag.jsx";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hide, selectProps } from "../redux/modalSlice.js";
import Modal from "./Modal.jsx";

const LargeModal = styled(Modal)`
  max-width: 700px;
`;

const Container = styled.div`
  min-height: 180px;
  margin: 24px 36px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: "SUIT Variable";
`;

const Video = styled.video`
  width: 100%;
  max-height: 400px;
  border-radius: 10px;
  outline: none;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #f2f2f2;
`;

const Description = styled.p`
  height: 80px;
  font-size: 16px;
  color: #f2f2f2;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const TagTitle = styled.span`
  font-size: 20px;
  color: #5f5f5f;
`;

const Button = styled.button`
  padding: 10px 24px;
  background-color: #f2f2f2;
  color: #242424;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #c6c6c6;
  }

  &.primary {
    background-color: #6968cc;
    color: #f2f2f2;

    &:hover {
      background-color: #4e4bae;
    }
  }
`;

const modal_id = "video";

const VideoModal = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    id,
    url,
    title,
    description,
    tags = [],
  } = useSelector(selectProps(modal_id)) ?? {};
  return (
    <LargeModal id={modal_id}>
      <Container>
        <Video controls src={url} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <BottomContainer>
          <TagTitle># 관련 태그</TagTitle>
          <Tag style={{ flexGrow: 1 }} list={tags} />
          <Button
            className="primary"
            onClick={() => navigate("/program/" + id)}
          >
            수강하기
          </Button>
          <Button onClick={() => dispatch(hide(modal_id))}>닫기</Button>
        </BottomContainer>
      </Container>
    </LargeModal>
  );
};

VideoModal.propTypes = {};

export default VideoModal;
