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

