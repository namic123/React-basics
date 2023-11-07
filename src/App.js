import React, { createContext, useContext, useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function MyInput() {
  const { setText } = useContext(TextContext);
  return (
    <>
      <Input onChange={(e) => setText(e.target.value)} />
    </>
  );
}

function MyText() {
  const { text } = useContext(TextContext);
  return <Text>{text}</Text>;
}

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
const TextContext = createContext(null);
export default App;
