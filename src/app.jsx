import React from "react";
import ReactDOM from "react-dom/client";

import "../src/css/style.css";

import Header from "./components/Header";
import Card from './components/Card';

import DataClients from '../src/data'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const clientList = DataClients.map((client) => {
    return(
        <Card 
            key={client.id}
            {...client}
        />
    )
})

root.render(
    <React.StrictMode >
        <div className="container">
            <Header />
            <div className="card__container">
                {clientList}
            </div>
        </div> 
    </React.StrictMode>
)