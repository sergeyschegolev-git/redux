import {store} from "../../redux/store";
import {decreaseByNum, increaseByNum} from "../../redux/actions";
import {DECREASE, INCREASE} from "../../redux/actionTypes";

const btnIncrease = document.getElementById("btnIncrease")
const btnDecrease = document.getElementById("btnDecrease")
const btnDecreaseNum = document.getElementById("btnDecreaseNum")
const btnIncreaseNum = document.getElementById("btnIncreaseNum")
const inputIncreaseNum = document.getElementById("increaseNum")
const inputDecreaseNum = document.getElementById("decreaseNum")
const counter = document.getElementById("counter")


btnIncrease.addEventListener('click', () => {
    store.dispatch({type: INCREASE})
})
btnDecrease.addEventListener('click', () => {
    store.dispatch({type: DECREASE})
})

btnIncreaseNum.addEventListener('click', () => {
    if (isNaN(inputIncreaseNum.value)) {
        return null
    }
    store.dispatch(increaseByNum(Number(inputIncreaseNum.value)))
    inputIncreaseNum.value = ''
})

btnDecreaseNum.addEventListener('click', () => {
    if (isNaN(inputDecreaseNum.value)) {
        return null
    }
    store.dispatch(decreaseByNum(Number(inputDecreaseNum.value)))
    inputDecreaseNum.value = ''
})


function render() {
    counter.innerHTML = store.getState().toString()
}

render()
store.subscribe(render)