"use client";
import React, { useState } from "react";
import Shield from "@/components/Shield";
import ShildBackContentPopup from "../Shield/ShildBackContentPopup";

const data = [
  {
    discription:
      "lorenajfjsn jasha fb ohiuhf adnabdiabid uqo9hqi yoj igw upac u udha y sv sfa idkajbd auyytfad  ayugduad uyaydabda oi eof vuauvhdhua uadgg   uiabavasui u uab ydbahb  aiudua  jjabhga 9a iuadia  ahdhiuayd abdiagda  hvcy aigdya hya auyahu va i yugfustyfe uadioaa ccvgaf aliagfytwe79f u ihi iuuihia iw oww h wo",
    heading: "aberu ehriahc adsnbjabd lankjd aajdho",
    img: "/events.jpg",
  },

  {
    discription:
      "lorenajfjsn jasha fb ohiuhf adnabdiabid uqo9hqi yoj igw upac u udha y sv sfa idkajbd auyytfad  ayugduad uyaydabda oi eof vuauvhdhua uadgg   uiabavasui u uab ydbahb  aiudua  jjabhga 9a iuadia  ahdhiuayd abdiagda  hvcy aigdya hya auyahu va i yugfustyfe uadioaa ccvgaf aliagfytwe79f u ihi iuuihia iw oww h wo",
    heading: "aberu ehriahc adsnbjabd lankjd aajdho",
    img: "/events.jpg",
  },
  {
    discription:
      "lorenajfjsn jasha fb ohiuhf adnabdiabid uqo9hqi yoj igw upac u udha y sv sfa idkajbd auyytfad  ayugduad uyaydabda oi eof vuauvhdhua uadgg   uiabavasui u uab ydbahb  aiudua  jjabhga 9a iuadia  ahdhiuayd abdiagda  hvcy aigdya hya auyahu va i yugfustyfe uadioaa ccvgaf aliagfytwe79f u ihi iuuihia iw oww h wo",
    heading: "aberu ehriahc adsnbjabd lankjd aajdho",
    img: "/events.jpg",
  },

  {
    discription:
      "lorenajfjsn jasha fb ohiuhf adnabdiabid uqo9hqi yoj igw upac u udha y sv sfa idkajbd auyytfad  ayugduad uyaydabda oi eof vuauvhdhua uadgg   uiabavasui u uab ydbahb  aiudua  jjabhga 9a iuadia  ahdhiuayd abdiagda  hvcy aigdya hya auyahu va i yugfustyfe uadioaa ccvgaf aliagfytwe79f u ihi iuuihia iw oww h wo",
    heading: "aberu ehriahc adsnbjabd lankjd aajdho",
    img: "/events.jpg",
  },

  {
    discription:
      "lorenajfjsn jasha fb ohiuhf adnabdiabid uqo9hqi yoj igw upac u udha y sv sfa idkajbd auyytfad  ayugduad uyaydabda oi eof vuauvhdhua uadgg   uiabavasui u uab ydbahb  aiudua  jjabhga 9a iuadia  ahdhiuayd abdiagda  hvcy aigdya hya auyahu va i yugfustyfe uadioaa ccvgaf aliagfytwe79f u ihi iuuihia iw oww h wo",
    heading: "aberu ehriahc adsnbjabd lankjd aajdho",
    img: "/events.jpg",
  },
  {
    discription:
      "lorenajfjsn jasha fb ohiuhf adnabdiabid uqo9hqi yoj igw upac u udha y sv sfa idkajbd auyytfad  ayugduad uyaydabda oi eof vuauvhdhua uadgg   uiabavasui u uab ydbahb  aiudua  jjabhga 9a iuadia  ahdhiuayd abdiagda  hvcy aigdya hya auyahu va i yugfustyfe uadioaa ccvgaf aliagfytwe79f u ihi iuuihia iw oww h wo",
    heading: "aberu ehriahc adsnbjabd lankjd aajdho",
    img: "/events.jpg",
  },
  {
    discription:
      "lorenajfjsn jasha fb ohiuhf adnabdiabid uqo9hqi yoj igw upac u udha y sv sfa idkajbd auyytfad  ayugduad uyaydabda oi eof vuauvhdhua uadgg   uiabavasui u uab ydbahb  aiudua  jjabhga 9a iuadia  ahdhiuayd abdiagda  hvcy aigdya hya auyahu va i yugfustyfe uadioaa ccvgaf aliagfytwe79f u ihi iuuihia iw oww h wo",
    heading: "aberu ehriahc adsnbjabd lankjd aajdho",
    img: "/events.jpg",
  },
  {
    discription:
      "lorenajfjsn jasha fb ohiuhf adnabdiabid uqo9hqi yoj igw upac u udha y sv sfa idkajbd auyytfad  ayugduad uyaydabda oi eof vuauvhdhua uadgg   uiabavasui u uab ydbahb  aiudua  jjabhga 9a iuadia  ahdhiuayd abdiagda  hvcy aigdya hya auyahu va i yugfustyfe uadioaa ccvgaf aliagfytwe79f u ihi iuuihia iw oww h wo",
    heading: "aberu ehriahc adsnbjabd lankjd aajdho",
    img: "/events.jpg",
  },
];
const ShieldContainer = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [currentItem, setCurrentItem] = useState<number>(0);
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-between gap-10">
      <ShildBackContentPopup
        disableActive={() => setIsPopupActive(false)}
        discription={data[currentItem].discription}
        heading={data[currentItem].heading}
        img={data[currentItem].img}
        isActive={isPopupActive}
      />
      {data.map((item, index) => (
        <Shield
          onClick={() => {
            setIsPopupActive(true);
            setCurrentItem(index);
          }}
          img={item.img}
          onRegister={() => {}}
          onShare={() => {}}
          title={item.heading}
          key={index}
        />
      ))}
    </div>
  );
};

export default ShieldContainer;
