import styled from "styled-components";
import PropTypes from "prop-types";

const Badge = styled.span`
  padding: 4px 16px;
  background-color: #242424;
  border-radius: 50px;
  border: 1px solid #444444;
  font-size: 16px;
  color: #f2f2f2;
  display: inline-flex;
  align-items: center;
  gap: 2px;

  &::before {
    content: "#";
    color: #727272;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Tag = ({ list = [], ...props }) => {
  return (
    <Container {...props}>
      {list.map((item, index) => (
        <Badge key={index}>{item}</Badge>
      ))}
    </Container>
  );
};


Tag.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};

export default Tag;