import {
  country,
  MyContent,
  MyElem,
  MyNavBar,
  text,
  value,
} from "./component/MyElem";

function App() {
  // 아래 컴포넌트를 하나의 파일에 작성하고 export하기
  // 파일명은 component/MyElem.js
  return (
    <div>
      <p>{country}</p>
      <p>{text}</p>
      <p>{value}</p>
      <MyElem />
      <MyNavBar />
      <MyContent />
    </div>
  );
}

export default App;
