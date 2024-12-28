import axios from "axios";

export const FETCH_TODOS_LOADING = "FETCH_TODOS_LOADING";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";

function fetchTodosLoading() {
    return {
        type: FETCH_TODOS_LOADING,
    };
};

function fetchTodosSuccess(todos) {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos,
    };
}

export function fetchTodos() {
    return function (dispatch , getState) {
        dispatch(fetchTodosLoading());
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            //console.log(res);  
            dispatch(fetchTodosSuccess(res.data));        
        });
    };
};

