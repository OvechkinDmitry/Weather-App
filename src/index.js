import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {App} from "./app";
import {BrowserRouter} from "react-router-dom";
import './index.css'
import {Provider} from "react-redux";
import store from './state'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <Provider store={store}>
              <App/>
            </Provider>
        </BrowserRouter>

);
reportWebVitals();
