import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import styled from "styled-components";

import store from "./store";
import Board from "./Board";

const Container = styled.section`
  background-color: #282c34;
  padding: 1em 5em;
  color: white;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Board />
        </Container>
      </Provider>
    );
  }
}

export default App;
