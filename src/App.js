import { Button } from "@chakra-ui/react";

function App(props) {
  // 브라우저는 이벤트 핸들러 메소드에
  // event 객체를 매개값으로 넣어줌
  function handleClick(event) {
    // console.log(event);
    // console.log(event.target);
    console.log(event.target.value);
    // console.log(event.target.className); // 요소의 클래스명
    // console.log(event.target.type); // 요소의 type - 여기서는 Button
  }
  return (
    <>
      <Button colorScheme="red" onClick={handleClick} value={"버튼1"}>
        button1
      </Button>
      <Button colorScheme="blue" onClick={handleClick}>
        button2
      </Button>
    </>
  );
}
export default App;
