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
      };

    case 'ADD_FRUIT':
      return {
        ...state,
        noOfFruits: state.noOfFruits + 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

// console.log(store.getState());

store.subscribe(() => {
  console.log("State Changed", store.getState());
});

// state.dispatch({
//   type: "BUY_FRUIT",
//   payload: "Extra Information"
// });
const BUY_FRUIT = 'BUY_FRUIT';

function buyFruit() {
  return {
    type: BUY_FRUIT,
    payload: "Extra Information"
  }
}

state.dispatch(buyFruit());

// console.log(store.getState());

state.dispatch({
  type: 'ADD_FRUIT',
  payload: "Extra Information"
});

// console.log(store.getState());
