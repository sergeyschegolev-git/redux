import {DECREASE, DECREASE_NUM, INCREASE, INCREASE_NUM} from "./actionTypes";

export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREASE:
            return state + 1
        case DECREASE:
            return state - 1
        case INCREASE_NUM:
            return state + action.payload
        case DECREASE_NUM:
            return state - action.payload
        default:
            return state
    }
}