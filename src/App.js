import { Button } from "@chakra-ui/react";

function MyButton({ excuteClick, children }) {
  return <Button onClick={excuteClick}>{children}</Button>;
}
function App() {
  function func1() {
    console.log("hello");
  }
  function func2() {
    console.log("greeting");
  }
  return (
    <>
      <MyButton excuteClick={func1}>Hello</MyButton>
      <MyButton excuteClick={func2}>Greeting</MyButton>
    </>
  );
}

export default App;
