import React, { createContext, useState } from "react";
import { AComp } from "./AComp";
import { BComp } from "./BComp";

function App(props) {
  const [message, setMessage] = useState("초기 상태");
  return (
    <div>
      <TextContext.Provider value={{ message, setMessage }}>
        <AComp />
        <BComp />
      </TextContext.Provider>
    </div>
  );
}
export const TextContext = createContext(null);
export default App;
