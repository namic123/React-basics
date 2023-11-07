import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function AComp() {
  const context = useContext(TextContext);
  return (
    <Button onClick={() => context.setMessage("변경 상태")}>
      메시지 변경!
    </Button>
  );
}

function BComp() {
  const { message } = useContext(TextContext); // 구조분해 할당
  return <Text>{message}</Text>;
}

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
const TextContext = createContext(null);
export default App;
