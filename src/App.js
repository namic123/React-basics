function App() {
  return (
    <div>
      <MyElem name={"흥민"} age={44} team={"토트넘"} />
      <MyElem name={"강인"} age={33} team={"파리"} />
    </div>
  );
}
function MyElem({ name, age, team }) {
  return (
    <>
      <div>
        <h1>
          이름은 {name} 나이는 {age} 팀은 {team}
        </h1>
      </div>
    </>
  );
}
export default App;
