import { Button } from "@chakra-ui/react";

function MyComp({ excuteClick, children }) {
  return (
    <>
      <Button onClick={excuteClick}>{children}</Button>
    </>
  );
}
function App(props) {
  function func1() {
    console.log("func1 실행");
  }
  let func2 = () => {
    console.log("arrow function 실행 222");
  };
  return (
    <>
      <div>
        <MyComp excuteClick={func1}>Button1</MyComp>
        <MyComp excuteClick={func2}>Button2</MyComp>
        <MyComp excuteClick={() => console.log("button3!!")}>Button3</MyComp>
        <MyComp
          excuteClick={() => {
            console.log("button3!!");
          }}
        >
          Button3
        </MyComp>
      </div>
    </>
  );
}
