import { Box, Flex } from "@chakra-ui/react";

function MyComp({ text, address, children }) {
  return (
    <>
      <p>{text}</p>
      <p>{address}</p>
      <p>{children}</p> {/*App의 MyComp 내부 컨텐츠의 요소*/}
    </>
  );
}

function App(props) {
  return (
    <>
      <div>
        <MyComp text={"hello"} address={"seoul"}>
          some contents 다른 컴포넌트가 있을 수 있다.
        </MyComp>
      </div>
    </>
  );
}
export default App;
