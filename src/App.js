function App() {
  return (
    <div>
      <MyComp
        m={"30px"}
        p={"10px"}
        color={"gold"}
        bg={"black"}
        text={"hello react"}
      />
      <MyComp m={"30px"} bg={"black"} />
      <MyComp m={"30px"} bg={"black"} text={"hello js"} />
      <MyComp p={"10px"} color={"gold"} text={"hello css"} />
    </div>
  );
}
function MyComp({
  m = "60px",
  p = "30px",
  color = "green",
  bg = "tomato",
  text = "값이 비어있음",
}) {
  return (
    <>
      <div style={{ color: color, margin: m, padding: p, backgroundColor: bg }}>
        <h1>{text}</h1>
      </div>
    </>
  );
}

export default App;
