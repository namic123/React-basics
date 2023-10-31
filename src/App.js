function App() {
  return (
    <div>
      <MyComponent1/>
      {/*
      div
      h1 Hello Component
      div/
      */}
      <MyComponent2/>
      {/*
      <div>
        <h1>Hello Component</h1>
      </div>
      */}
    </div>
  );
}
function MyComponent1(){
  return (
      <div>
        <h1>Hello Component</h1>
      </div>
  )
}
function MyComponent2(){
  return (
      <>
      <p>lorem ipsum alkdjf alkdjf </p>
    <ul>
        <li>lorem</li>
        <li>ipsum</li>
        <li>dolor</li>
    </ul>
    </>
  )
}

export default App;
