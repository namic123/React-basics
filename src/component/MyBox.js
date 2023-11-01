import mycss from "../style/style1.module.css";
export function MyBox() {
  return (
    <>
      <div>
        <h1 className={mycss.boxClass}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          itaque.
        </h1>
      </div>
    </>
  );
}
