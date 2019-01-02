import { createStore } from 'redux'
import getBlankBoard from "./getBlankBoard";

const initialState = {
  board: getBlankBoard()
}

const store = createStore((state = initialState) => {
  return {
    ...state
  };
})

export default store;
