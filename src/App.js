import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function CComp(props) {
  return (
    <>
      <Text>{props.text}</Text>
    </>
  );
}

function AComp(props) {
  return (
    <>
      <CComp text={props.text} />
    </>
  );
}

function DComp(props) {
  return (
    <>
      <Input onChange={props.onChange} />
    </>
  );
}

function BComp(props) {
  return (
    <>
      <DComp onChange={props.onChange} />
    </>
  );
}

function App(props) {
  const [message, setMessage] = useState("원본");
  return (
    <div>
      <BComp onChange={(e) => setMessage(e.target.value)} />
      <AComp text={message} />
    </div>
  );
}

export default App;
