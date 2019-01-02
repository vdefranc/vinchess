import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withSize } from "react-sizeme";

const files = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
];

const Container = styled.div`
  height: 100px;
  border: 1px solid gray;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Position = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.75em;
`

function Square({ rank, file, size, piece }) {
  const fileIndexDivisibleBy2 = !(files.indexOf(file) % 2)
  const rankDivisibleby2 = !(rank % 2)
  let backgroundColor;
  let color;

  if (fileIndexDivisibleBy2 && !rankDivisibleby2) {
    backgroundColor = "white"
    color = "black";
  }

  if (!fileIndexDivisibleBy2 && !rankDivisibleby2) {
    backgroundColor = "black"
    color = "white";
  }

  if (!fileIndexDivisibleBy2 && rankDivisibleby2) {
    backgroundColor = "white"
    color = "black";
  }

  if (fileIndexDivisibleBy2 && rankDivisibleby2) {
    backgroundColor = "black"
    color = "white";
  }

  return <Container
    style={{
      height: size.width,
      backgroundColor,
      color
    }}>
      <i class={`cm cm-${piece.color}-${piece.type}`} aria-hidden="true"></i>

      {/* <Position>{file + rank}</Position> */}
  </Container>;
}

Square.propTypes = {
  file: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  size: PropTypes.object
};

export default withSize()(Square);

