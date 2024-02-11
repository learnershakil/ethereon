import { useState } from "react";
import style from "./style.module.css";
import ShildBackContentPopup from "./ShildBackContentPopup";
/* Share, Explore, Register */
const Shield = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <ShildBackContentPopup
        disableActive={() => setIsActive(false)}
        discription="lorenajfjsn jasha fb ohiuhf ihi iuuihia iw oww h wo"
        heading="aberu ehriahc aajdho"
        img="/lofas.png"
        isActive={isActive}
      />
      <div onClick={() => setIsActive(true)} className={style["shield"]}>
        <div className={style["shieldFront"]}></div>
        <div className={style["shieldBack"]}>
          <div className="w-[70%] h-[70%] bg-white m-auto"></div>
        </div>
      </div>
      <div className=""></div>
    </>
  );
};

export default Shield;
