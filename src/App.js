function App() {
  return (
    <div>
      <MyComp />
    </div>
  );
}
function MyComp() {
  const address = "seoul";
  const country = "korea";
  const phone = "01034234234";
  const age = 44;
  return (
    <>
      <h1>age눈 {age}</h1>
      <h1> address는 {address}</h1>
      <h1>country는 {country}</h1>
      <h1>phone은 {phone}</h1>
    </>
  );
}
export default App;
