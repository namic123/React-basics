function App() {
  function handleClick(e) {
    e.preventDefault();
    window.location.href = "https://www.naver.com";
  }
  return (
    <>
      <a href="https://www.daum.net" onClick={handleClick}>
        다음으로 이동
      </a>
    </>
  );
}

export default App;
