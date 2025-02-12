const loadState = () => JSON.parse(localStorage.getItem("counterHistory")) || {
    past: [],
    present: { count: 0 },
    future: []
};

const counterReducer = (state = loadState(), action) => {
    const { past, present, future } = state;

    switch (action.type) {
        case "INCREMENT":
        case "DECREMENT":
        case "RESET":
            return {
                past: [...past, present],
                present: action.type === "INCREMENT" ? { count: present.count + 1 }
                       : action.type === "DECREMENT" ? { count: present.count - 1 }
                       : { count: 0 },
                future: []
            };

        case "UNDO":
            if (past.length === 0) return state;
            return {
                past: past.slice(0, -1),
                present: past[past.length - 1],
                future: [present, ...future]
            };

        case "REDO":
            if (future.length === 0) return state;
            return {
                past: [...past, present],
                present: future[0],
                future: future.slice(1)
            };

        default:
            return state;
    }
};

export { counterReducer, loadState };
