import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { config } from "./constants";

import "./App.css";

import logo from "./logo.svg";

function App() {
    const [isLoading, setIsLoading] = useState(false);

    const toggleLoading = () => {
        setIsLoading((prev) => !prev);
    };

    const fetchData = useCallback(() => {
        toggleLoading();
        setTimeout(() => {
            axios
                .get(`${config.url.API_URL}/days`)
                .then((resp) => {
                    console.log(resp.data);
                    toggleLoading();
                })
                .catch((error) => {
                    console.log(error);
                    toggleLoading();
                });
        }, 1000);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className="App">
            <header className="App-header">
                {isLoading && <img src={logo} className="App-logo" alt="logo" />}
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
