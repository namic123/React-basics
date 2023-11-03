import { Button } from "@chakra-ui/react";

function App(props) {
  function handleClickButton1() {
    console.log("1번 버튼 클릭됨");
  }
  function handleClickButton2() {
    console.log("2번 버튼 클릭됨");
  }
  function handleClick(number) {
    console.log(number + "번 버튼 클릭됨");
  }

  return (
    <>
      <Button onClick={handleClickButton1}>첫번째 버튼</Button>
      <Button onClick={handleClickButton2}>두번째 버튼</Button>
      <Button onClick={() => handleClick(3)}>세번째 버튼</Button>
      <Button onClick={() => handleClick(4)}>네번째 버튼</Button>
    </>
  );
}
export default App;
