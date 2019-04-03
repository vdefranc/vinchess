import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withSize } from "react-sizeme";

import getPieceSvg from "./vinPieceSvgs"

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

function Square({ rank, file, size, piece, numAttackers }) {
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

  return <Container
    style={{
      height: size.width,
      backgroundColor,
      color: piece && piece.color === 'b' ? 'black' : 'white'
    }}>
      {numAttackers > 0 && <span style={{ color: 'blue' }}>{numAttackers}</span>}

      { piece && piece.type &&
        <svg viewBox={`1 1 43 43`} width={size.width / 1.5} height={size.width}>
          <g>{getPieceSvg(piece.type, piece.color)}</g>
        </svg>
      }
    </Container>;
}

Square.propTypes = {
  file: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  size: PropTypes.object
};

export default withSize()(Square);

