import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

export default function App() {
    return (
        <NextUIProvider>
            <div className="App"><h1 class="text-3xl font-bold underline">
                Hello world! hi
            </h1> </div>
        </NextUIProvider>
    );
}