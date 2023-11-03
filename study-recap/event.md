# event 객체
* 사용자가 페이지와 상호작용할 때 생성되는 객체로 이벤트에 대한 상세 정보를 담고 있음.
* React에서 이벤트 객체는 원본 브라우저 이벤트를 래핑한 SyntheticEvent 인스턴스이다.

### event.target
* 이벤트가 실제로 발생한 DOM요소를 가리킨다.
* 이벤트 리스너에 의해 캐치된 가장 구체적인 곳의 요소를 참조한다.
* 이것은 이벤트 위임이나 이벤트가 발생한 위치를 파악하고자 할 때 유용
```js
function List() {
  function handleClick(event) {
    console.log(event.target); // 클릭된 요소를 콘솔에 출력합니다.
  }

  return (
    <ul onClick={handleClick}>
      <li>항목 1</li>
      <li>항목 2</li>
      <li>항목 3</li>
    </ul>
  );
}
```