import React, { useState } from "react";

function App(props) {
  //hook: use로 시작하는 함수
  // hook은 컴포넌트 상단에 작성해야 한다.
  // 조건문이나, 반복문, 중첩된 함수 안에 작성하면 안된다.

  if (true) {
    // hook 호출 코드 작성 불가
  }
  for (let i = 0; i < 3; i++) {
    // hook 호출 코드 작성 불가
  }
  return <div></div>;
}

export default App;
