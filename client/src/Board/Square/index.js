import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withSize } from "react-sizeme";

import SVGs from "./pieceSvgs";

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

  if (fileIndexDivisibleBy2 && !rankDivisibleby2) {
    backgroundColor = "papayawhip"
  }

  if (!fileIndexDivisibleBy2 && !rankDivisibleby2) {
    backgroundColor = "cornflowerblue"
  }

  if (!fileIndexDivisibleBy2 && rankDivisibleby2) {
    backgroundColor = "papayawhip"
  }

  if (fileIndexDivisibleBy2 && rankDivisibleby2) {
    backgroundColor = "cornflowerblue"
  }

  if (piece.type === 'pawn' && piece.color === 'w') {
    console.log(SVGs.wP)
    return <Container
      style={{
        height: size.width,
        backgroundColor,
        color: piece.color === 'b' ? 'black' : 'white'
      }}>
        <svg viewBox={`1 1 43 43`} width={size.width / 1.5} height={size.width}>
          <g>{SVGs.wP}</g>
        </svg>
      </Container>;
  }

  return <Container
    style={{
      height: size.width,
      backgroundColor,
      color: piece.color === 'b' ? 'black' : 'white'
    }}>
      <i style={{fontSize: '2em'}} className={`cm cm-${piece.color}-${piece.type}`} aria-hidden="true"></i>

      {/* <Position>{file + rank}</Position> */}
  </Container>;
}

Square.propTypes = {
  file: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  size: PropTypes.object
};

export default withSize()(Square);

