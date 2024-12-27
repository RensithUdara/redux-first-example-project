import { createStore } from 'redux'

const initialState = {
  noOfFruits: 5
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'BUY_FRUIT':
      return {
        ...state,
        noOfFruits: state.noOfFruits - 1
      }
  }
}

const store = createStore(reducer);

state.dispatch({
  type: 'BUY_FRUIT',
  payload: "Extra Information"
});