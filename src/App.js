import React from "react";
import { Input } from "@chakra-ui/react";

function App(props) {
  let text = "initial text";
  function handleChange(e) {
    // console.log("인풋값이 변경!!");
    console.log(e.target.value);
    text = e.target.value; // 변수의 값이 변경 되어도 바로 dom에 반영되지 않는다.
    console.log("text", text); // 콘솔을 찍었을 때는 값이 변경되어 있는 것으로 보임
  }
  return (
    <div>
      <p>{text}</p>
      <Input onChange={handleChange} />
      <Input onChange={handleChange} />
    </div>
  );
}

export default App;
