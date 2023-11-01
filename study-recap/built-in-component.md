# built-in Component 
* React라이브러리에서 JSX에서 활용할 수 있도록 제공하는 기본적인 컴포넌트

## Fragment
* 여러 컴포넌트를 묶어주는 역할을 한다.
```javascript
<React.Fragment>
  <ComponentA />
  <ComponentB />
</React.Fragment>
// or 
<>
  <ComponentA />
  <ComponentB />
</>
```

## StrictMode
* 개발 모드에서만 활성화되는 컴포넌트이며, 버그를 조기에 발견해주는 역할을함.