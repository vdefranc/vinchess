import React from 'react';
import Chess from "chess.js"

import Board from "../Board"
import { cpus } from 'os';

class Game extends React.Component {
  state = {
    history: [],
    numMovesMap: {},
    dark: '#deb887b8'
  }

  constructor() {
    super();
    this.engine = new Chess();

    ["e4", "e5", "Nf3", "Nc6", "Nc3", "Nf6"].forEach(move => {
      this.engine.move(move)
    })
  }

  componentDidMount() {
    this.setState({
      numMovesMap: this.getNumMovesMap()
    })
  }

  onSubmit = (e) => {
    const move = e.target[0].value;

    console.log(this.engine.turn())
    const isBlackMoving = this.engine.turn() === 'b'

    e.preventDefault()
    const thing = this.engine.move(move)
    console.log(thing)
    this.engine.undo()
    this.engine.remove(thing.from)
    this.engine.put({ type: thing.piece, color: thing.color }, thing.to)
    const yo = this.getNumMovesMap()
    this.engine.remove(thing.to)
    this.engine.put({ type: thing.piece, color: thing.color }, thing.from)
    this.engine.move(move)

    this.setState({
      history: [...this.state.history, move],
      numMovesMap: isBlackMoving ? this.state.numMovesMap : yo
    })
  }

  getNumMovesMap() {
    return this.engine.SQUARES.reduce((acc, square) => {
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

      if (piece && piece.type === 'n') {
        if (square[1] === '1' || square[1] === '8') {
          return acc
        }
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
  }

  onSubmitColor = (e) => {
    const color = e.target[0].value;
    e.preventDefault()

    this.setState({dark: color})
  }

  render() {
    const board = this.engine.SQUARES.map(s => {
      return {
        piece: this.engine.get(s),
        numAttackers: this.state.numMovesMap[s]
      }
    })

    return <section>
      <Board board={board} dark={this.state.dark} />

      <form style={{marginTop: '1em'}} onSubmit={this.onSubmit}>
        <input name="move" type="text" />
        <button type="submit">submit</button>
      </form>


      <form style={{ marginTop: '1em' }} onSubmit={this.onSubmitColor}>
        <input name="color" type="text" />
        <button type="submit">submit color</button>
      </form>
    </section>
  }
}

export default Game
