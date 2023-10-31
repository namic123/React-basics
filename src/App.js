function App() {
  let divStyle = {
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <div style={divStyle}>
      <MyComp />
      <MyComp />
      <MyComp />
    </div>
  );
}

function MyComp() {
  const name = "흥민";
  return <div style={{ backgroundColor: "tomato" }}>{name}</div>;
}
export default App;
