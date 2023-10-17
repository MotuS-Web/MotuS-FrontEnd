import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #292929;
`;

const Image = styled.img`
  height: 240px;
  width: 360px;
  object-fit: contain;
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

function formatTime(seconds) {
  const totalSeconds = Math.floor(seconds);
  const min = Math.floor(totalSeconds / 60);
  const sec = totalSeconds % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

const Thumbnail = ({ src, time }) => {
  const formattedTime = formatTime(time);
  return (
    <Container>
      <Image src={src} />
      <Time>{formattedTime}</Time>
    </Container>
  );
};

Thumbnail.propTypes = {
  src: PropTypes.string,
  time: PropTypes.number,
};

export default Thumbnail;
