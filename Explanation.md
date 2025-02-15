# Enhancements & Optimizations

1.UI Integration

- Currently, it logs to the console, but adding a simple UI with  buttons for "Add," "Subtract," and "Reset" would improve usability.
- Display the counter visually instead of relying solely on logs.

2.Local Storage Persistence

- Save the tally count in localStorage so the state persists across page reloads.
- Implement a "Load Previous State" feature.

3.Middleware System (Like Redux Middleware)

- Introduce a simple middleware system to log actions before they reach the reducer.
- Could be useful for debugging or future expansions.

4.Undo/Redo Feature

- Maintain an array of previous states and allow users to revert or redo actions.

5.Async Actions (Simulating Thunks or Sagas)

- Maybe implement a delayed increment action using setTimeout() to mimic async operations.

6.Testing

- Write unit tests for the reducer, actions, and store        functionality using Jest.

# Redux App

This is a simple Redux store implementation that manages the state of a tally counter. It showcases how to manage the state with actions and a reducer while logging the results to the console.

## How to Run the Code

1. Download/Clone the repository: Download or clone this repository to your local machine.

2. Open the project folder: Navigate to the project folder where the files are located.

3. Open index.html in a browser:

- If you are using a local server (e.g., Live Server in VS Code), you can open index.html in your browser directly.

- Alternatively, you can use any static file server to serve the project files.

4. Check the Console: Open your browser's Developer Tools (press F12 or Ctrl+Shift+I), go to the Console tab, and you'll see the state changes as actions are dispatched.

## Overview
In this project, I implemented a Redux-inspired store with the following features:

- State Management: The state is managed centrally in a store, and actions are dispatched to update the state.-
- Actions: There are three types of actions — ADD, SUBTRACT, and RESET — which modify the state accordingly.-
- Reducer: The reducer function listens for the dispatched actions and returns the updated state.-
- Subscription: A subscriber function listens for state changes and logs the updated state to the console whenever a change occurs.-

## Files:

- actions.js: {Defines the action types (ADD, SUBTRACT, RESET) and action creators.}

- reducers.js: {Contains the tallyReducer function that handles state updates based on the dispatched actions.}

- store.js: {Implements the store logic with methods getState, dispatch, and subscribe to interact with the state.}

- script.js: Handles the logic for dispatching actions and observing state changes, simulating real-world scenarios {like adding, subtracting, and resetting the counter.}
