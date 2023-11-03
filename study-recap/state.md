# React의 상태관리, 컴포넌트의 렌더링 제어

## State
* 데이터를 저장하는 공간
* 데이터가 변경될 때 컴포넌트가 재렌더링되도록 만든다.
* state는 사용자 이벤트, 서버 응답 등으로 인해 변경될 수 있는 데이터를 관리하기 위해 사용
* 함수 컴포넌트에서는 HooksAPI인 useState를 사용한다.

## useState
* 함수 컴포넌트에서 state를 사용할 수 있게 해주는 HOOK이다.
* useState함수는 상태 변수와 그 상태를 업데이트하는 함수를 쌍으로 제공한다.

```js
  const [message, setMessage] = useState("");
```
* useState는 리턴 값으로 배열을 제공한다.
* 배열의 index 0은 현재 상태.
* index 1은 state를 변경할 수 있는 메서드(리렌더링)
* 구조분해 할당에 의해 index 0 -> message, index 1-> setMessage로 할당
```js
function App(props) {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(number + 1);
  }
  return (
    <div>
      <Button onClick={handleClick}> 바꾸기</Button>
      <Text>{number}</Text>
    </div>
  );
}
```
* 흐름
* useState Hook을 사용하여 'number'라는 상태 변수와 이 상태를 변경할 수 있는 'setNumber' 함수를 선언
* 'number'의 초기 값은 0
* 'handleClick' 함수는 버튼 클릭 시 호출되며, 'setNumber' 함수를 사용하여, 현재 'number' 상태에 1을 더해 업데이트.
