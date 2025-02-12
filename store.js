// createStore function that initializes the store
export function createStore(reducer) {
    let state = reducer(undefined, {});
    const listeners = [];
  
    // getState: Returns the current state
    function getState() {
      return state;
    }
  
    // dispatch: Dispatches an action to update the state
    function dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener()); // this notifies all subscribers
    }
  
    // subscribe: Registers a listener to be notified on state changes
    function subscribe(listener) {
      listeners.push(listener);
    }
  
    return { getState, dispatch, subscribe };
  }



  

// Minimal Redux-inspired store
function createStore(reducer) {
  let state;
  let listeners = [];


  // Returns the current state
  const getState = () => state;

  // Dispatches an action to update the state
  const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
  };

  // Subscribes a function to state changes
  const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
          listeners = listeners.filter(l => l !== listener);
      };
  };

  // Initialize the state
  dispatch({});

  return { getState, dispatch, subscribe };
}

// Reducer function to handle state changes
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

// Create the store
const store = createStore(counterReducer);

// Subscribe to state changes and log them
store.subscribe(() => {
  console.log("State Updated:", store.getState());
});

// SCENARIO 1: Initial State Verification
console.log("Initial State:", store.getState()); // Should log { count: 0 }

// SCENARIO 2: Incrementing the Counter
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" }); // Should log { count: 2 }

// SCENARIO 3: Decrementing the Counter
store.dispatch({ type: "SUBTRACT" }); // Should log { count: 1 }

// SCENARIO 4: Resetting the Counter
store.dispatch({ type: "RESET" }); // Should log { count: 0 }
