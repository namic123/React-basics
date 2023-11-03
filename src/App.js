import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  let result = number1 + number2;
  function handleNumber1(e) {
    setNumber1(Number(e.target.value));
  }
  function handleNumber2(e) {
    setNumber2(Number(e.target.value));
  }

  return (
    <>
      <div>
        <Input type="number" onChange={handleNumber1} /> +
        <Input type="number" onChange={handleNumber2} />={result}
      </div>
    </>
  );
}

export default App;
