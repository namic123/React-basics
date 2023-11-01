import { MyBox, MyElem, MyContainer } from "./component/MyBox";
import { name, address, person } from "./component/MyBox"; // 변수 import

function App() {
  console.log("name", name);
  console.log("address", address);
  console.log("person", person);
  return (
    <>
      <MyBox />
      <MyElem />
      <MyContainer />
    </>
  );
}

export default App;
