import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {

    return (
        <NextUIProvider>
            <div className="App dark">
                <h1 class="text-3xl font-bold underline">
                    Testing
                </h1>
            </div>
        </NextUIProvider>
    );
}