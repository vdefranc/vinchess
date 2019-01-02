import React from "react";
import styled from "styled-components";
import Square from "./Square";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: auto;
`

const files = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h'
];

export default function Board(props) {
  return <Container>
    {Array(64).fill('').map((_, i) => {
      const indexOfFile = (i + 8) % 8;
      const file = files[indexOfFile];
      const rank = (8 - Math.floor((i + 8) / 8)) + 1

      return <Square
        key={i}
        file={file}
        rank={rank}
      >
      </Square>
    })}
  </Container>
}
