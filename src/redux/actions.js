import {DECREASE, DECREASE_NUM, INCREASE, INCREASE_NUM} from "./actionTypes";

export const increase = () => {
    return {
        type: INCREASE,
    }
}

export const decrease = () => {
    return {
        type: DECREASE,
    }
}

export const increaseByNum = (data) => {
    return {
        type: INCREASE_NUM,
        payload: data,
    }
}

export const decreaseByNum = (data) => {
    return {
        type: DECREASE_NUM,
        payload: data,
    }
}