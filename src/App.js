function App() {
  const myStyle = {
    color: "tomato",
    backgroundColor: "gold", // lowerCamelCase
    fontSize: "70px",
    textAlign: "center",
  }; // js Object

  return (
    <>
      {/* style 속성은 객체로 주어야 한다.*/}
      <div style={myStyle}>Lorem ipsum dolor.</div>
      <hr />
      <div
        style={{
          color: "tomato",
          backgroundColor: "skyblue", // lowerCamelCase
          fontSize: "70px",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor.
      </div>
    </>
  );
}

export default App;
