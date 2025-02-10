const initialState = {
    count: 0,
  };
  
  // Different types of actions
  const ADD = "ADD";
  const SUBTRACT = "SUBTRACT";
  const RESET = "RESET";
  
  // Handle actions and update state
  function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD:
        return { ...state, count: state.count + 1 };
      case SUBTRACT:
        return { ...state, count: state.count - 1 };
      case RESET:
        return { count: 0 };
      default:
        return state;
    }
  }
  
  // Creates the store
  function initializeStore(reducer) {
    let currentState = initialState;
    let listeners = [];
    return {
      getState: () => currentState,
      dispatch: (action) => {
        currentState = reducer(currentState, action);
        listeners.forEach((listener) => listener());
      },
      subscribe: (listener) => {
        listeners.push(listener);
        return () => {
          listener.filter(listeners);
        };
      },
    };
  }
  
  let myStore = initializeStore(reducer);
  
  // SCENARIO 1: Initial state verification
  console.log(myStore.getState());
  
  //Subscribe to state changes
  myStore.subscribe(() => console.log(myStore.getState()));
  console.log(myStore.getState());