function App() {
  return (
    <>
      <MyComp name={"흥민"} address={"신촌"} age={33} city={"서울"} />
      <MyComp name={"강남"} age={22} city={"부산"} />
      <MyComp age={42} city={"부산"} />
      <MyComp name="" age={23} city="" address="" />
    </>
  );
}

function MyComp({ name = "홍길동", age = 100, address = "?", city = "?" }) {
  // 기본값을 줄 수 있음

  return (
    <>
      <div>
        <p>
          {name}은 {age}세 이고 {address}, {city}에 산다
        </p>
      </div>
    </>
  );
}
export default App;
