import { Button, Center } from "@chakra-ui/react";

function App() {
  function handleOuterBoxClick(e) {
    e.stopPropagation();
    console.log("바깥 상자 클릭됨");
  }
  function handleinnerBoxClick(e) {
    e.stopPropagation();
    console.log("안쪽 상자 클릭됨");
  }
  function handleBtnClick(e) {
    e.stopPropagation();
    console.log("클릭됨");
  }
  return (
    <>
      <Center bg={"red"} w={"200px"} h={"200px"} onClick={handleOuterBoxClick}>
        <Center
          bg={"gold"}
          w={"100px"}
          h={"100px"}
          onClick={handleinnerBoxClick}
        >
          <Button bg={"green"} w={"50px"} h={"50px"} onClick={handleBtnClick}>
            Button
          </Button>
        </Center>
      </Center>
    </>
  );
}

export default App;
