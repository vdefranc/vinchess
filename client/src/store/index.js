import { createStore } from 'redux'
import getFilledBoard from "./getFilledBoard"

const initialState = {
  board: getFilledBoard()
}

const store = createStore((state = initialState) => {
  return {
    ...state,
  };
})

export default store;
