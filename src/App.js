import { Button } from "@chakra-ui/react";

function MyLink({ to, children }) {
  return (
    <>
      <Button as={"a"} href={to} colorScheme={"tomato"}>
        {children}
      </Button>
    </>
  );
}

function App() {
  return (
    <>
      <MyLink to={"https://www.naver.com"}>naver로</MyLink>
      <MyLink to={"https://www.daum.net"}>daum으로</MyLink>
    </>
  );
}

export default App;
