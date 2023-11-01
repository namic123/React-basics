function App() {
  return (
    <div>
      <MyBox
        p={"10px"}
        m={"10px"}
        color={"tomato"}
        text={"1번 째 "}
        bg={"green"}
      />
      <MyBox
        p={"50px"}
        m={"50px"}
        color={"gold"}
        text={"2번 째 "}
        bg={"blue"}
      />
      <MyBox
        p={"30px"}
        m={"30px"}
        color={"skyblue"}
        text={"3번 째 "}
        bg={"black"}
      />
    </div>
  );
}
function MyBox({ p, m, bg, color, text }) {
  return (
    <>
      <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
        <p>{text}</p>
      </div>
    </>
  );
}
export default App;
