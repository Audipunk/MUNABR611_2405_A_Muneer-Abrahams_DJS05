const store = createStore(counterReducer);

function updateUI() {
    const countElement = document.getElementById("count");
    if (countElement) {
        countElement.innerText = store.getState().count;
    }
    console.log("State Updated:", store.getState());
}

store.subscribe(updateUI);

document.getElementById("addBtn").addEventListener("click", () => store.dispatch(addAction()));
document.getElementById("subtractBtn").addEventListener("click", () => store.dispatch(subtractAction()));
document.getElementById("resetBtn").addEventListener("click", () => store.dispatch(resetAction()));

updateUI();
