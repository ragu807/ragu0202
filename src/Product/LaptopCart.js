// LaptopCart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const laptops = [
    { id: 1, name: "Dell Inspiron", price: 55000 },
    { id: 2, name: "HP Pavilion", price: 61000 },
    { id: 3, name: "Lenovo ThinkPad", price: 70000 },
    { id: 4, name: "Apple MacBook Air", price: 95000 },
];

export default function LaptopCart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Laptop Store</h2>
            {laptops.map(lap => (
                <div key={lap.id} style={{ marginBottom: "10px" }}>
                    {lap.name} - ₹{lap.price}
                    <button style={{ marginLeft: "10px" }} onClick={() => dispatch({ type: "ADDTOCART", product: lap })}>
                        ADD TO CART
                    </button>
                </div>
            ))}
            <h3>Cart Preview</h3>
            {cart.length === 0 ? (
                <p>No laptops in cart</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} style={{ marginBottom: "8px" }}>
                        {item.name} - ₹{item.price}
                        <button style={{ marginLeft: "10px" }} onClick={() => dispatch({ type: "REMOVE", id: item.id })}>
                            REMOVE
                        </button>
                    </div>
                ))
            )}
            {cart.length > 0 && (
                <button style={{ marginTop: "10px" }} onClick={() => dispatch({ type: "CLEAR" })}>
                    CLEAR CART
                </button>
            )}
        </div>
    );
}
