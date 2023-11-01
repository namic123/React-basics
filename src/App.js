// export된 컴포넌트(변수, 함수, 객체)를 import 사용 가능
import { MyElem } from "./component/MyElem";
import { MyComp } from "./component/MyComp";
import { MyHeader } from "./component/MyHeader";

function App() {
  return (
    <>
      <MyHeader />
      <MyComp />
      <MyElem />
    </>
  );
}

export default App;
