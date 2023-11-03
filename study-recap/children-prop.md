# Children prop
* 컴포넌트가 다른 컴포넌트를 "자식"으로 받아서 렌더링할 수 있게 해주는 prop

```js
function ParentComponent(props) {
  return <div>{props.children}</div>;
}

function App() {
  return (
    <ParentComponent>
      <p>이것은 자식 요소입니다.</p>
    </ParentComponent>
  );
}
```

* App 컴포넌트는 ParentComponent를 렌더링할 때, <p>이것은 자식 요소입니다.</p>를 children으로 전달한다.
* 렇게 하면 ParentComponent는 그 내부에 어떤 내용이 들어갈지를 열어두고, 사용하는 쪽에서 결정할 수 있게 된다.

children prop은 어떤 종류의 자식 컴포넌트도 받을 수 있으며, 심지어 문자열이나 숫자, 또는 아무 것도 없을 수도 있다.

```js
function MyLink({ to, children }) {
  return (
    <>
      <a href={to}>{children}</a>
      <br />
    </>
  );
}

function App() {
  return (
    <>
      <MyLink to={"https://www.naver.com"}>naver로</MyLink>
      <MyLink to={"https://www.daum.net"}>daum으로</MyLink>
    </>
  );
}
```