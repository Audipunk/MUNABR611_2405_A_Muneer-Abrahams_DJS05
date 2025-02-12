class Store {
    constructor(reducer, initialState, middlewares = []) {
        this.reducer = reducer;
        this.state = initialState;
        this.middlewares = middlewares;
        this.listeners = new Set();
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.middlewares.forEach(mw => mw(action, this.state));
        this.state = this.reducer(this.state, action);
        localStorage.setItem("counterHistory", JSON.stringify(this.state));
        this.listeners.forEach(listener => listener());
    }

    subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }
}

export { Store };
