import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function ChildComp(props) {
  return (
    <>
      <Button onClick={props.onClick}>클릭!!</Button>
    </>
  );
}

function SomeComp(props) {
  return (
    <>
      <ChildComp onClick={props.onClick} />
    </>
  );
}

function OtherChildComp(props) {
  return (
    <>
      <Text>{props.text}</Text>
    </>
  );
}

function OtherComp(props) {
  return (
    <>
      <OtherChildComp text={props.text} />
    </>
  );
}

function App(props) {
  const [message, setMessage] = useState("원래 메세지!");
  return (
    <div>
      <SomeComp onClick={() => setMessage("다른 메세지!")} />
      <OtherComp text={message} />
    </div>
  );
}

export default App;
