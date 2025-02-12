// actionTypes
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const RESET = 'RESET';

// action creators
export function add() {
  return { type: ADD };
}

export function subtract() {
  return { type: SUBTRACT };
}

export function reset() {
  return { type: RESET };
}

function createStore(reducer) {
    let state = reducer(undefined, {});
    let listeners = [];

    const getState = () => state;
    
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };
    
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };
    
    return { getState, dispatch, subscribe };
}

function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case "ADD":
            return { count: state.count + 1 };
        case "SUBTRACT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

const store = createStore(counterReducer);

function updateUI() {
    const countElement = document.getElementById("count");
    if (countElement) {
        countElement.innerText = store.getState().count;
    }
    console.log("State Updated:", store.getState());
}

store.subscribe(updateUI);

const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const resetBtn = document.getElementById("resetBtn");

if (addBtn) addBtn.addEventListener("click", () => store.dispatch({ type: "ADD" }));
if (subtractBtn) subtractBtn.addEventListener("click", () => store.dispatch({ type: "SUBTRACT" }));
if (resetBtn) resetBtn.addEventListener("click", () => store.dispatch({ type: "RESET" }));

updateUI();