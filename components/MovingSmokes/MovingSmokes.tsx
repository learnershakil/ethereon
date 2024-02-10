import style from "./style.module.css";

const MovingSmokes = () => {
  return (
    <div className={" absolute z-[60] top-0 left-0 w-full h-full "}>
      <img
        src="/smoke1.jpg"
        alt="smoke"
        className={"block w-full h-full " + style["moveSmokeLeft"]}
      />
      <img
        src="/smoke2.jpg"
        alt="smoke"
        className={"block w-full h-full " + style["moveSmokeRight"]}
      />
    </div>
  );
};

export default MovingSmokes;
