function MyElem() {
  return (
    <div>
      <h1>My Element</h1>
    </div>
  );
}

export { MyElem };

// named export
export const address = "seoul";

const age = 30;
// default export
// 이름은 정해져 있지 않음
// 한 파일에 하나만 가능
export default age;
