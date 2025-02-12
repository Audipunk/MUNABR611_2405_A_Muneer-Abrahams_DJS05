import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, reset } from "../store/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Redux Counter</h1>
            <div style={{ fontSize: "2rem", margin: "20px" }}>{count}</div>
            <button onClick={() => dispatch(add())}>Add</button>
            <button onClick={() => dispatch(subtract())}>Subtract</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;
