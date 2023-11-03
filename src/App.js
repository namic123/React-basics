import { Button } from "@chakra-ui/react";

function MyComp({ excuteClick, children }) {
  return <></>;
}
function App(props) {
  // 함수명 작성 관습
  // handle 이벤트명
  function handleClick() {
    console.log("second");
  }
  function handleMouseEnter() {
    console.log("third");
  }
  function handleMouseLeave() {
    console.log("fourth");
  }
  return (
    <>
      <Button onClick={() => console.log("first")}>버튼1</Button>
      <Button onClick={handleClick}>버튼2</Button>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        버튼3
      </Button>
    </>
  );
}
export default App;
