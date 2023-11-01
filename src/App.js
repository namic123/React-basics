function App() {
  return (
    <div>
      <MyText
        style={{ color: "tomato", backgroundColor: "gold" }}
        value={"1번째"}
      />
      <MyText
        style={{ color: "green", backgroundColor: "skyblue" }}
        value={"2번째"}
      />
    </div>
  );
}
function MyText(props) {
  return (
    <>
      <div style={props.style}>
        <p>{props.value}</p>
      </div>
    </>
  );
}
export default App;
