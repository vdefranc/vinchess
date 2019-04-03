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
  const boardAsArray = Object.entries(board).reduce((acc, [key, value]) => {
    for (var prop in value) {
      acc.push(value[prop])
    }

    return acc;
  }, [])

  return <Container>
    {boardAsArray.map((val, i) => {
      const indexOfFile = (i + 8) % 8;
      const file = files[indexOfFile];
      const rank = (8 - Math.floor((i + 8) / 8)) + 1

      return <Square
        key={i}
        piece={engine.get(file + rank)}
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
