import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import App from './App';
import { store } from "./store";
import './index.css';

function Application() {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>T-Shop</title>
            </Helmet>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

export default Application;