import { Card, CardBody } from "@chakra-ui/react";

function MyBox({ color, bg, children }) {
  return (
    <>
      <Card color={color} bg={bg}>
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
}

function App() {
  return (
    <>
      <MyBox color={"white"} bg={"tomato"}>
        Contents
      </MyBox>
      <MyBox color={"green"} bg={"yellow"}>
        Contents
      </MyBox>
      <MyBox color={"pink"} bg={"red"}>
        Contents
      </MyBox>
    </>
  );
}

export default App;
