import React, { createContext, useState } from "react";
import { MyText } from "./component/MyText";
import { MyInput } from "./component/MyInput";

function App(props) {
  const [text, setText] = useState("");
  return (
    <div>
      <TextContext.Provider value={{ text, setText }}>
        <MyInput />
        <MyText />
      </TextContext.Provider>
    </div>
  );
}
export const TextContext = createContext(null);
export default App;
