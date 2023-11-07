import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput(props) {
  return (
    <>
      <Input
        value={props.address}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    </>
  );
}

function MyText(props) {
  return (
    <>
      <Box>
        <Text>{props.address}</Text>
      </Box>
    </>
  );
}

function App(props) {
  const [address, setAddress] = useState("");
  function handleInputChange(text) {
    setAddress(text);
  }
  return (
    <div>
      <MyInput address={address} onChange={handleInputChange} />
      <MyText address={address} />
    </div>
  );
}

export default App;
