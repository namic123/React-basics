import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function App(props) {
  const [message, setMessage] = useState("");
  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <Input type={"text"} value={message} onChange={handleChange} />
      <Text>{message}</Text>
    </div>
  );
}

export default App;
