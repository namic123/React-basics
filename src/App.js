function App() {
  return (
    <>
      <MyComp value={"흥민"} address="신촌" />
      <MyComp value={"강인"} address="강남" />
    </>
  );
}

function MyComp(props) {
  // 구조분해 할당
  // function MyComp({value, address}) 이렇게 작성도 가능
  // 구조 분해 할당 방식이 더 많이 ㅏ용됨
  let { value, address } = props;
  // value = props.value
  // address = props.value
  return (
    <>
      <div>
        <h1>
          {value}는 {address}에 산다.
        </h1>
      </div>
    </>
  );
}
export default App;
