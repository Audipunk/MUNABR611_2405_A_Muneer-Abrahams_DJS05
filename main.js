import { Store } from "./store.js";
import { counterReducer, loadState } from "./reducer.js";
import { loggerMiddleware } from "./middleware.js";
import { updateUI, registerEventListeners } from "./ui.js";

// Create Store
const store = new Store(counterReducer, loadState(), [loggerMiddleware]);

// Initialize App
store.subscribe(updateUI);
registerEventListeners();
updateUI();

export { store };
