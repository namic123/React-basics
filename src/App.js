import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  const message = useContext(MessageContext);
  return (
    <>
      <Text>받은 메세지 : {message}</Text>
    </>
  );
}

function BComp() {
  return (
    <>
      <CComp />
    </>
  );
}

function AComp() {
  return (
    <>
      <BComp />
    </>
  );
}

function App(props) {
  const [message, setMessage] = useState("");

  // message state를 CComp에 전달하기
  // 1. context 만들기: createContext();
  // 2. context에 state 넣기: <Context.Provider value={state}></Context.Provider>
  // 3. tree(하위 컴포넌트)안에 사용하기

  return (
    <div>
      <Button onClick={() => setMessage("바꾼 메세지!!")}>버튼</Button>
      <MessageContext.Provider value={message}>
        <AComp />
      </MessageContext.Provider>
    </div>
  );
}

// 1.Context 만들기
// context 이름은 ...Context
// 변수명은 대문자로 시작하고 Context로 끝남.
const MessageContext = createContext(null);
export default App;
