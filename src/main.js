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


import { combineReducers, createStore } from 'redux';
import fruitReducer from './redux/fruitSection/fruitReducer';
import pharmacyReducer from './redux/pharmacySection/pharmacyReducer';
import { buyFruit } from './redux/fruitSection/fruitAction';
import { buyPHARMACY_ITEM } from './redux/pharmacySection/pharmacyAction';

const rootReducer = combineReducers({
    fruit: fruitReducer,
    pharmacy: pharmacyReducer,

})

const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() => {
    console.log("State Changed", store.getState());
});  


store.dispatch(buyFruit("Apple"));
store.dispatch(buyPHARMACY_ITEM("Pharmacy Item 1"));

unsubscribe();