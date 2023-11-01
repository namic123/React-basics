import asdfasdf, { address, MyElem } from "./component/MyElem";
import MyBox, { country, person } from "./component/MyBox";

function App() {
  return (
    <>
      <MyElem />
      <h1>{address}</h1>
      <h1>{asdfasdf}</h1>
      <MyBox />
      <h1>{country}</h1>
      <h1>
        {person.name},{person.age}
      </h1>
    </>
  );
}

export default App;
