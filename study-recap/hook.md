# hook
* React의 hook은 함수형 컴토넌트에서도 상태 관리 및 react의 다양한 기능을 사용할 수 있게 해준다.
* use로 시작하는 함수 


### hook의 규칙
* hook은 컴포넌트 상단에 작성해야 한다.
* 조건문이나 반복문, 중첩된 함수 안에 작성하면 안된다.
```js
// 올바른 사용 예
function ExampleComponent() {
  const [count, setCount] = useState(0);

  // ...
}

  if(true){
    // hook 호출 코드 작성 불가
    const [count, setCount] = useState(0);
  }
  for (let i = 0; i < 3; i++) {
    // hook 호출 코드 작성 불가
    const [count, setCount] = useState(0);
  }
```

### hook의 종류
1. useState: 가장 기본적인 Hook으로, 컴포넌트의 상태를 관리