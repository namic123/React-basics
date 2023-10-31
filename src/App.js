function App() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);
  return (
    // 두 수를 출력하고
    // 두 수가 같으면
    // "당첨!!"
    // 두 수가 다르면
    // "다시 던져 보세요"
    <div>
      <h1>
        num1은 {num1}, num2는 {num2}
      </h1>
      <h1>당첨 여부 : {num1 === num2 ? "당첨" : "다시 던져 보세요"}</h1>
    </div>
  );
}

export default App;
