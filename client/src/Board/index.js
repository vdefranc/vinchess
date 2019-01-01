import React from "react";
import styled from "styled-components";
import Square from "./Square";

const Container = styled.p`
  font-weight: bold;
`

export default function Board(props) {
  return <React.Fragment>
    {Array(64).fill('').map((_, i) => {
      return <Square
        key={i}
        file="a"
        rank={i}
      >
      </Square>
    })}
  </React.Fragment>
}
