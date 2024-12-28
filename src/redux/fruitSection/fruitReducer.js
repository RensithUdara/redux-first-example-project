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