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
        discription="lorenajfjsn jasha fb ohiuhf adnabdiabid uqo9hqi yoj igw upac u udha y sv sfa idkajbd auyytfad  ayugduad uyaydabda oi eof vuauvhdhua uadgg   uiabavasui u uab ydbahb  aiudua  jjabhga 9a iuadia  ahdhiuayd abdiagda  hvcy aigdya hya auyahu va i yugfustyfe uadioaa ccvgaf aliagfytwe79f u ihi iuuihia iw oww h wo"
        heading="aberu ehriahc adsnbjabd lankjd aajdho"
        img="/events.jpg"
        isActive={isActive}
      />
      <div onClick={() => setIsActive(true)} className={style["shield"]}>
        <div className={style["shieldFront"]}></div>
        <div className={style["shieldBack"]}>
          <div className="w-[60%] h-[60%] bg-white rounded-xl m-auto"></div>
        </div>
      </div>
      <div className=""></div>
    </>
  );
};

export default Shield;
