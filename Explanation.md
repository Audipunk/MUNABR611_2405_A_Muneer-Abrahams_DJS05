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

## Redux App

This is a simple Redux store implementation that manages the state of a tally counter. It showcases how to manage the state with actions and a reducer while logging the results to the console.

## Running the Code

1. Download or Clone the Repository

- Clone the repository using Git or download it as a ZIP file and extract it to your local machine.

2: Navigate to the Project Folder

- Open the folder where the project files are located.

3: Open index.html in a Browser,

- If using a local server (e.g., Live Server in VS Code), open index.html directly in your browser.
- Alternatively, use any static file server to serve the project files.

4: Check the Console for State Changes

- Open your browser’s Developer Tools (F12 or Ctrl + Shift + I).
- Go to the Console tab to view the state updates as actions are dispatched.

## Overview

This project features a Redux-inspired store designed to manage a tally counter's state efficiently. It includes the following key components:

- State Management: A centralized store maintains the state, which updates through dispatched actions.
- Actions: Supports three action types—ADD, SUBTRACT, and RESET—to modify the state accordingly.
- Reducer: A function that processes dispatched actions and returns the updated state.
- Subscription: A subscriber function listens for state changes and logs updates to the console.

## Files

- actions.js – Defines action types (ADD, SUBTRACT, RESET) and their corresponding action creators.
- reducers.js – Contains the tallyReducer function, which updates the state based on the dispatched actions.
- store.js – Implements the store logic with methods like getState, dispatch, and subscribe.
- script.js – Manages action dispatching and observes state changes, simulating real-world interactions (e.g., incrementing, decrementing, and resetting the counter).
