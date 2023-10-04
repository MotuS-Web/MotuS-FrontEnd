import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Image = styled.img`
  height: 240px;
  width: 360px;
  object-fit: cover;
`;

const Time = styled.p`
  margin: 4px;
  padding: 4px 12px;
  position: absolute;
  background-color: rgba(13, 13, 13, 0.8);
  border-radius: 4px;
  color: #f2f2f2;
  font-size: 12px;
  font-weight: 600;
`;

const Thumbnail = ({ src, time }) => {
  return (
    <Container>
      <Image src={src} />
      <Time>{time}</Time>
    </Container>
  );
};

Thumbnail.propTypes = {
  src: PropTypes.string,
  time: PropTypes.string,
};

export default Thumbnail;
