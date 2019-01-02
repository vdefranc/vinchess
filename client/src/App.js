import React, { Component } from 'react';
import './App.css';
import styled from "styled-components";

import Board from "./Board"

const Container = styled.section`
  background-color: #282c34;
  padding: 1em 5em;
  color: white;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Board />
      </Container>
    );
  }
}

export default App;
