import React, { useReducer } from "react";
import { initialState, reducer } from "./Reducer";
import Cart from "./Cart";

export default function ProductCart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const products = [
    { id: 2, name: "Dairy Milk", price: 10 },
    { id: 3, name: "Ferrero Rocher", price: 240 },
  ];
      const mapapi=process.env.React_map_api;
      console.log(mapapi);
  return (
    <div>
      <h2>Products</h2>
      {products.map((pro) => (
        <div key={pro.id}>
          {pro.name} - ${pro.price}
          <button onClick={() => dispatch({ type: "ADDTOCART", product: pro })}>
            ADD
          </button>
        </div>
      ))}

      <h3>Cart preview</h3>
      {state.cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        state.cart.map((item) => (
          <div key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch({ type: "REMOVE", id: item.id })}>
              REMOVE
            </button>
          </div>
        ))
      )}

      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}