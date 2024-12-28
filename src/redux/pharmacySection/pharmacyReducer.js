import { ADD_PHARMACY_ITEM, BUY_PHARMACY_ITEM } from "./pharmacyAction";

const initialState = {
    noOfPharmacyItems: 10
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case BUY_PHARMACY_ITEM:
            return {
                ...state,
                noOfFruits: state.noOfPharmacyItems - 1
            };

        case ADD_PHARMACY_ITEM:
            return {
                ...state,
                noOfFruits: state.noOfPharmacyItems + 1
            };
        default:
            return state;
    }
}

export default reducer;