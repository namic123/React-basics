# React 스타일 적용방법
* 보통 css 파일
* CSS 모듈 사용
* chakraUI : css 라이브러리


# CSS 모듈 사용 
* CSS 모듈은 파일 이름을 *.module.css 으로 지정하여 사용

### css 모듈 파일
```css
/* Button.module.css */
.boxClass {
  background-color: blue;
  color: white;
}
.error{
}

.note{
    
}
```
```js
// 
import style from "../style/style2.module.css";

export function MyContainer() {
  return (
    <>
      <div>
        <h1 className={`${style.boxClass} ${style.error} ${style.note}`}>
          Lorem ipsum dolor sit amet.
        </h1>
        <h1 className={[style.boxClass, style.error, style.note].join(" ")}>
          Lorem ipsum dolor sit amet.
        </h1>
      </div>
    </>
  );
}

```