
export const BUY_FRUIT = 'BUY_FRUIT';
export const ADD_FRUIT = 'ADD_FRUIT';

function buyFruit(fruitName) {
    return {
        type: BUY_FRUIT,
        payload: "Extra Information" + fruitName
    }
}

function addFruit(fruitName) {
    return {
        type: ADD_FRUIT,
        payload: "Extra Information" + fruitName
    }
}
