import style from "./style.module.css";

const MovingSmokes = () => {
  return (
    <div className={" absolute z-[60] top-0 left-0 w-full h-full "}>
      <img
        src="/smoke1.jpg"
        alt="smoke"
        className={
          "block top-0 left-0 absolute w-full h-full " + style["moveToRight"]
        }
      />
      <img
        src="/smoke2.jpg"
        alt="smoke"
        className={
          "block absolute top-0 left-0 w-full h-full " + style["moveToLeft"]
        }
      />
    </div>
  );
};

export default MovingSmokes;
