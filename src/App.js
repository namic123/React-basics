import React, { useEffect, useState } from "react";

function App(props) {
  const [number, setNumber] = useState();
  // useEffect 사용시 자주하는 실수
  useEffect(() => {
    console.log("코드 실행");
    // setNumber(number + 1); // 트리거하는 값을 변경하면 안됨.
  }, [number]);
  return <div></div>;
}

export default App;
