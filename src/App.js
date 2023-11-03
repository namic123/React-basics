import React from "react";
import { Button } from "@chakra-ui/react";

function MyComp({ to, someProp }) {
  someProp();
  return (
    <>
      <a href={to[0]}>link!!!</a>
      <Button onClick={someProp}>클릭</Button>
    </>
  );
}
function App(props) {
  function func1() {
    console.log("func1 실행됨");
  }
  return (
    <>
      <MyComp to={["https://www.naver.com"]} someProp={func1}>
        네이버로 이동
      </MyComp>
      >
    </>
  );
}
export default App;
