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
    window.engine = this.engine
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
    const board = this.engine.SQUARES.map(s => this.engine.get(s))

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
