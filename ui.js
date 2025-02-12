import { store } from "./main.js";

const updateUI = () => {
    document.getElementById("count").innerText = store.getState().present.count;
};

const registerEventListeners = () => {
    document.getElementById("incrementBtn").addEventListener("click", () => store.dispatch({ type: "INCREMENT" }));
    document.getElementById("decrementBtn").addEventListener("click", () => store.dispatch({ type: "DECREMENT" }));
    document.getElementById("resetBtn").addEventListener("click", () => store.dispatch({ type: "RESET" }));
    document.getElementById("undoBtn").addEventListener("click", () => store.dispatch({ type: "UNDO" }));
    document.getElementById("redoBtn").addEventListener("click", () => store.dispatch({ type: "REDO" }));

    // Keyboard Shortcuts (Ctrl+Z = Undo, Ctrl+Y = Redo)
    document.addEventListener("keydown", (event) => {
        if (event.ctrlKey && event.key === "z") store.dispatch({ type: "UNDO" });
        if (event.ctrlKey && event.key === "y") store.dispatch({ type: "REDO" });
    });
};

export { updateUI, registerEventListeners };
