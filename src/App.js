import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App(props) {
  // set... 메소드로 상태 변경할 수 있음.
  // 상태가 같은지 아닌 지 판단해서 re-render를 결정한다.

  const [number, setNumber] = useState(0);
  const [numberObject, setNumberObject] = useState({ number: 0 });
  function handleNumberObject() {
    // newNumberObject를 사용하는 이유는 React에서 상태를 변경할 때 불변성(Immutability)을 유지하기 위함
    // React에서는 상태 업데이트가 발생할 때, 이전 상태와 새로운 상태를 비교하여 변화가 있을 때만 리렌더링을 진행
    // numberObject 상태의 number 속성이 증가된 새로운 객체를 생성하고, 이를 setNumberObject를 통해 업데이트하게 된다.
    const newNumberObject = { ...numberObject };
    newNumberObject.number = numberObject.number + 1;
    setNumberObject(newNumberObject);
  }

  return (
    <div>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>number 변경</Button>
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button onClick={handleNumberObject}>number 객체 변경</Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </div>
  );
}

export default App;
