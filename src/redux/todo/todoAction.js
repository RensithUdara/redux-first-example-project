import axios from "axios";

export const FETCH_TODOS_LOADING = "FETCH_TODOS_LOADING";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";

function fetchTodosLoading(isloading) {
    return {
        type: FETCH_TODOS_LOADING,
        payload: isloading,
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
        dispatch(fetchTodosLoading(true));
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            //console.log(res);  
            dispatch(fetchTodosSuccess(res.data));  
            dispatch(fetchTodosLoading(false));      
        });
    };
};

