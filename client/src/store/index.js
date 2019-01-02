import { createStore } from 'redux'

const initialState = {
  board: {}
}

const store = createStore((state = initialState) => {
  return {
    ...state
  };
})

export default store;
