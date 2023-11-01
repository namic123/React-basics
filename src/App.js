import { MyText } from "./component/MyNavbar";
import { MyNavbar } from "./component/MyNavbar";
import { MyContatiner } from "./component/MyContatiner";
import { MyBox } from "./component/MyBox";

function App() {
  return (
    <div>
      {/* 아래 네개 컴포넌트를 src/component 폴더에 만든다*/}
      <MyText />
      <MyBox />
      <MyContatiner />
      <MyNavbar />
    </div>
  );
}

export default App;
