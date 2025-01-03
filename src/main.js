// import { createStore } from 'redux'


// const initialState = {
//   noOfFruits: 5
// }

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'BUY_FRUIT':
//       return {
//         ...state,
//         noOfFruits: state.noOfFruits - 1
//       };

//     case 'ADD_FRUIT':
//       return {
//         ...state,
//         noOfFruits: state.noOfFruits + 1
//       };
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);

// // console.log(store.getState());

// store.subscribe(() => {
//   console.log("State Changed", store.getState());
// });

// // state.dispatch({
// //   type: "BUY_FRUIT",
// //   payload: "Extra Information"
// // });
// const BUY_FRUIT = 'BUY_FRUIT';

// function buyFruit(fruitName) {
//   return {
//     type: BUY_FRUIT,
//     payload: "Extra Information" + fruitName
//   }
// }

// state.dispatch(buyFruit("Apple"));

// // console.log(store.getState());

// // state.dispatch({
// //   type: 'ADD_FRUIT',
// //   payload: "Extra Information"
// // });
// const ADD_FRUIT = 'ADD_FRUIT';

// function buyFruit(fruitName) {
//   return {
//     type: BUY_FRUIT,
//     payload: "Extra Information" + fruitName
//   }
// }
// state.dispatch(addFruit("Orange"));

// // console.log(store.getState());


import { combineReducers, createStore, applyMiddleware } from 'redux';
import fruitReducer from './redux/fruitSection/fruitReducer';
import pharmacyReducer from './redux/pharmacySection/pharmacyReducer';
import { buyFruit } from './redux/fruitSection/fruitAction';
import { buyPHARMACY_ITEM } from './redux/pharmacySection/pharmacyAction';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import todoReducer from './redux/todo/todoReducer';

const rootReducer = combineReducers({
    fruit: fruitReducer,
    pharmacy: pharmacyReducer,
    todo: todoReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// const unsubscribe = store.subscribe(() => {
//     console.log("State Changed", store.getState());
// });

// function thunkfunction(dispatch, getState) {
//     //console.log("Thunk Function", dispatch, getState);
// }

store.dispatch(buyFruit("Apple"));
store.dispatch(buyPHARMACY_ITEM("Pharmacy Item 1"));

// store.dispatch(thunkfunction);

//unsubscribe();

store.dispatch(fetchTodos());