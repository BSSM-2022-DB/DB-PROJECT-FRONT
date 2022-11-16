import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './componets/Header';
import AxEx from "./componets/AxEx";
import MainContents from "./componets/MainContents";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

//const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const initialValue = "탑";

function reducer(state = initialValue, action) {
    console.log(action.type);
    if (action.type === "top") return state="탑";
    else if (action.type === "jungle") return state="정글";
    else if (action.type === "mid") return state="미드";
    else if (action.type === "adc") return state="원딜";
    else if (action.type === "support") return state="서폿";
    else return state;
}

let store = createStore(reducer);

root.render(
        <StrictMode>
            <Provider store={store}>
                <Header />
                <MainContents data=<AxEx line="미드" /> />
            </Provider>
            </StrictMode>
            );

reportWebVitals();
