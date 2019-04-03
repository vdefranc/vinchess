import React from 'react';
import Chess from "chess.js"

import Board from "../Board"

class Game extends React.Component {
  state = {
    history: []
  }

  constructor() {
    super();
    this.engine = new Chess();
  }

  onSubmit = (e) => {
    const move = e.target[0].value;

    e.preventDefault()
    this.engine.move(move)

    this.setState({
      history: [...this.state.history, move]
    })
  }

  render() {
    const numMovesMap = this.engine.SQUARES.reduce((acc, square) => {
      const validMovesFromSquare = this.engine.moves({
        square,
        verbose: true
      });

      const piece = this.engine.get(square)

      if (!acc[square]) {
        acc[square] = 0
      }

      if (piece && piece.type === 'p') {
        return acc
      }

      for (var i = 0; i < validMovesFromSquare.length; i++) {
        const { to: destinationSquare } = validMovesFromSquare[i]

        if (!acc[destinationSquare]) {
          acc[destinationSquare] = 1
        } else {
          acc[destinationSquare]++
        }
      }

      return acc;
    }, {})

    const board = this.engine.SQUARES.map(s => {
      return {
        piece: this.engine.get(s),
        numAttackers: numMovesMap[s]
      }
    })

    return <section>
      <Board board={board} />

      <form style={{marginTop: '1em'}} onSubmit={this.onSubmit}>
        <input name="move" type="text" />
        <button type="submit">submit</button>
      </form>
    </section>
  }
}

export default Game
