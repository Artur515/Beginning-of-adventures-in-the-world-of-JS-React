import store from "..";
import { ActionTypes } from "./actionTypes";
const initialState = {
    list: [],
    currentUser: null,
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERS:
            return {
                ...state,
                list: action.payload,
            };
        case ActionTypes.ADD_USER:
            return {
                ...state,
                list: [...state.list, action.payload],
            };

        case ActionTypes.DELETE_USER:
            return {
                ...state,
                list: state.list.filter((u) => u._id !== action.payload),
            };
        default:
            return state;
    }
};
