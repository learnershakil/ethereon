import style from "./style.module.css";

const MovingSmokes = () => {
  return (
    <div className={" absolute z-[60] top-0 left-0 w-full h-full "}>
      <div className={"absolute bottom-0 w-full h-96 "}>
        <img
          src="/cloud1.png"
          alt="smoke"
          className={"block  bottom-0 left-0 absolute  "}
        />
        <img
          src="/cloud1.png"
          alt="smoke"
          className={
            "block  bottom-0 left-96 absolute  " + style["moveToRight"]
          }
        />
        <img
          src="/cloud2.png"
          alt="smoke"
          className={"block  absolute bottom-0 left-50  " + style["moveToLeft"]}
        />
        <img
          src="/cloud1.png"
          alt="smoke"
          className={
            "block  bottom-0 left-30 absolute left-30 " + style["moveToRight"]
          }
        />
        <img
          src="/cloud2.png"
          alt="smoke"
          className={
            "block  absolute bottom-0 left-50  " + style["moveToRight"]
          }
        />
        <img
          src="/cloud2.png"
          alt="smoke"
          className={"block  absolute bottom-0 left-20  " + style["moveToLeft"]}
        />
      </div>
      <div className={"absolute bottom-0 w-full h-96 "}>
        <img
          src="/cloud1.png"
          alt="smoke"
          className={
            "block opacity-100 bottom-0 right-40 absolute  " +
            style["moveToLeft"]
          }
        />
        <img
          src="/cloud2.png"
          alt="smoke"
          className={
            "block opacity-100 absolute bottom-0 right-0  " +
            style["moveToRight"]
          }
        />
        <img
          src="/cloud2.png"
          alt="smoke"
          className={
            "block opacity-30 absolute bottom-0 right-0  " + style["moveToLeft"]
          }
        />
      </div>
    </div>
  );
};

export default MovingSmokes;
