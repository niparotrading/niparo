import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

export default function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <div className="App"><h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> </div>
    </NextUIProvider>
  );
}