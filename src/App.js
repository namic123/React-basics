// React 라이브러리와 useState Hook을 불러옴
import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  // useState Hook을 사용하여 'number'라는 상태 변수와 이 상태를 변경할 수 있는 'setNumber' 함수를 선언.
  // 'number'의 초기 값은 0.
  const [number, setNumber] = useState(0);

  // 'handleClick' 함수는 버튼 클릭 시 호출되며, 'setNumber' 함수를 사용하여
  // 현재 'number' 상태에 1을 더해 업데이트
  function handleClick() {
    setNumber(number + 1);
  }
  return (
    <div>
      <Button onClick={handleClick}> 바꾸기</Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;
