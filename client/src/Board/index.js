import React from "react";
import styled from "styled-components";
import Square from "./Square";

const Container = styled.p`
  font-weight: bold;
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
  return <React.Fragment>
    {Array(64).fill('').map((_, i) => {
      const indexOfFile = (i + 8) % 8;

      return <Square
        key={i}
        file={files[indexOfFile]}
        rank={i}
      >
      </Square>
    })}
  </React.Fragment>
}
