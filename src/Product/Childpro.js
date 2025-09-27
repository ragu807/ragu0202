// Childpro.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Childpro = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            Childpro
            <h1>{count}</h1>
            <h2>HP</h2>
            <button onClick={() => dispatch({ type: "INCRE" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "DECRE" })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
            <h2>DELL</h2>
            <button onClick={() => dispatch({ type: "INCRE" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "DECRE" })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
            <h2>Acer</h2>
            <button onClick={() => dispatch({ type: "INCRE" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "DECRE" })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>

        </div>
    );
};

export default Childpro;
