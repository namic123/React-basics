import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput(props) {
  return (
    <>
      <Input
        value={props.address}
        onChange={(e) => props.onChange(e.target.value)}
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

  return (
    <div>
      <MyInput address={address} onChange={(text) => setAddress(text)} />
      <MyText address={address} />
    </div>
  );
}

export default App;
