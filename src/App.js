import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }
  function handleUserEmailChange(e) {
    setEmail(e.target.value);
  }
  return (
    <div>
      <Box>
        <Input
          type={"text"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Box>
      <Box>
        <Input type={"text"} value={email} onChange={handleUserEmailChange} />
      </Box>
      <Text>
        {username}의 email은 {email}입니다.
      </Text>
    </div>
  );
}

export default App;
