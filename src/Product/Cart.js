import React from "react";

export default function Cart({ state, dispatch }) {
    // quick runtime guard: ensure dispatch exists
    if (!dispatch) {
        return <div style={{ color: "red" }}>No dispatch passed to Cart — check App props</div>;
    }

    return (
        <div>


            <div style={{ marginTop: 12 }}>
                <button
                    type="button"                     // important if inside any <form>
                    onClick={() => {
                        console.log("CLEAR click");
                        dispatch({ type: "CLEAR" });
                    }}
                    style={{ background: "blue", color: "white", padding: "8px 12px", border: "none", borderRadius: 4 }}
                >
                    CLEAR
                </button>
            </div>
        </div>
    );
}