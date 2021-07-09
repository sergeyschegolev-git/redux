import {DECREASE_NUM, INCREASE_NUM} from "./actionTypes";

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