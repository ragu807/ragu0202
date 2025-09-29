// App.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "./Product/Storeredux";
import Childpro from "./Product/Childpro";
import LaptopCart from "./Product/LaptopCart";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Childpro />
                <LaptopCart/>
            </Provider>
        </div>
    );
}
//exporting app.js in app
export default App;
