import { ADD_USER_LOGIN } from "./type";

const initialState = {};

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER_LOGIN:
            return {...action.payload}
        default:
            return state;
    }
}