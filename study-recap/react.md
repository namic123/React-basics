# React Bundler
* 리액트 프로젝트에서는 소스코드와 라이브러리, 그리고 다른 자원들을 하나의 파일로 묶어 웹에서 실행할 수 있게해주는 Bundler가 일반적으로 사용된다.
* Webpack이 가장 널리 사용되는 bundler임.
* Webpack의 특징
  * 여러 개의 js파일을 하나로 병합
  * CSS, 이미지, 폰트 같은 자원을 JS코드와 같이 묶어줌
  * 개발과 배포를 위한 다양한 설정 제공

# JSX 
* JSX는 JavaScript의 문법 확장
* React컴포넌트를 더 쉽게 작성할 수 있도록 html과 유사한 문법을 제공
* 웹 브라우저의 기본 HTML 태그에 대응된다.

# React 컴포넌트
* JavaScript함수 또는 클래스로 구현됨.
* React 컴포넌트는 props라고 불리는 매개변수를 받아서 React엘리먼트로 반환한다.

## 함수형 컴포넌트
* 가장 단순한 형태의 React 컴포넌트
* 이들은 단순히 props를 받아서 렌더링할 내용을 반환한다.
```js
function App() {
  return (
    <div>
      <h1>hello react</h1>
        <h2>hi react</h2>
        <MyComp />
    </div>
  )
}
function MyComponent2(props){   // 부모 컴포넌트에게 데이터를 받을 수 있는 매개변수
    <h1>hello, {props.name}</h1>
  return 
}
 ```

### 클래스형 컴포넌트
* 클래스형 컴포넌트는 더 복잡한 기능이 필요할 때 사용된다.
```java
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Props와 State
* Props: 부모 컴포넌트로부터 전달받은 데이터. 읽기 전용이며 컴포넌트 내에서 변경할 수 없다.
* State: 컴포넌트 내부에서 관린되는 데이터. setState 메서드 또는 React의 useState 훅을 이용해 변경할 수 있다.

## 컴포넌트 명명 규칙
* 컴포넌트명은 대문자로 시작한다.
* 빌트인 컴포넌트명은 소문자로 시작한다.