import myStyle from "../style/mystyle.module.css";
export default function MyText() {
  return (
    <>
      {/* red 배경 white 글자*/}
      {/* mystyle 파일 생성*/}
      {/* */}
      <div>
        <h1 className={myStyle.error}>Lorem ipsum dolor sit amet.</h1>
      </div>
    </>
  );
}
