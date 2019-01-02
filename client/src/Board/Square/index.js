import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withSize } from "react-sizeme";

const Container = styled.div`
  height: 100px;
  border: 1px solid gray;

  display: flex;
  align-items: center;
  justify-content: center;
`;

function Square({ rank, file, size }) {
  return <Container
    style={{
      height: size.width
    }}>
    {file + rank}
  </Container>;
}

Square.propTypes = {
  file: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  size: PropTypes.object
};

export default withSize()(Square);

