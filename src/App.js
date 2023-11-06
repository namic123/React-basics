import { Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  function handleNumberIncrease() {
    setNumber(number + 1);
  }
  function handleNumberDecrease() {
    setNumber(number - 1);
  }
  return (
    <>
      <h1>{number}</h1>
      <Button onClick={handleNumberIncrease}>증가</Button>
      <Button onClick={handleNumberDecrease}>감소</Button>
    </>
  );
}

export default App;
