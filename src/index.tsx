import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {AuthProvider} from "./components/AuthContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                {/*<AuthProvider>*/}
                    <App/>
                {/*</AuthProvider>*/}
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
