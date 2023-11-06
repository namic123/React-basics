import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [obj, setObj] = useState({ message: "" });

  function handleObjectMessageChange(e) {
    /*    const newObj = { ...obj };
    newObj.message = e.target.value;
    setObj(newObj);*/

    // 리팩토링
    setObj({ ...obj, message: e.target.value });
  }

  return (
    <>
      <div>
        <Box>
          <Input value={message} onChange={(e) => setMessage(e.target.value)} />
          <Text>{message}</Text>
        </Box>
        <Box>
          <Input value={obj.message} onChange={handleObjectMessageChange} />
          <Text>{obj.message}</Text>
        </Box>
      </div>
    </>
  );
}

export default App;
