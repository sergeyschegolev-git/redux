import {DECREASE, DECREASE_NUM, INCREASE, INCREASE_NUM} from "./actionTypes";
const initialState ={
    counter: 0,
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {counter: state.counter + 1}
        case DECREASE:
            return {counter: state.counter - 1}
        case INCREASE_NUM:
            return {counter: state.counter  + action.payload}
        case DECREASE_NUM:
            return {counter: state.counter  - action.payload}
        default:
            return state
    }
}