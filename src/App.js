import React, { useEffect, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  console.log("useEffect 밖의 로그"); // 리렌더링 시에 계속 호출
  // useEffect
  // 컴포넌트 외부시스템과 작업할 때
  // 주로 ajax로 데이터 가져올 때

  // 1번째 인자: 실행할 함수
  // 2번째 인자: 1번째 인자를 실행시키는 값, 빈 배열이면 초기 렌더링 때만 실행됨.
  // 즉, 리렌더링 시에는 실행되지 않는다.
  useEffect(() => {
    console.log("이펙트의 1번째 파라미터 함수 실행됨.", number);
  }, []);
  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;
