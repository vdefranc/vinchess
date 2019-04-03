import React from "react";
import styled from "styled-components";
import Square from "./Square";
import { connect } from 'react-redux';
import getBlankBoard from "../store/getBlankBoard"

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

function Board({ engine, board }) {

  console.log(engine.SQUARES.map(s => {
    return engine.get(s)
  }))

  const newBoard = engine.SQUARES.map(s => engine.get(s))

  return <Container>
    {newBoard.map((piece, i) => {
      const indexOfFile = (i + 8) % 8;
      const file = files[indexOfFile];
      const rank = (8 - Math.floor((i + 8) / 8)) + 1

      return <Square
        key={i}
        piece={piece}
        file={file}
        rank={rank}
      >
      </Square>
    })}
  </Container>
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    board: state.board
  }
}

export default connect(
  mapStateToProps
)(Board)
