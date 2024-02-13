import { useState } from "react";
import style from "./style.module.css";

interface Props {
  img: string;
  title: string;
  onClick: () => void;
  onShare: () => void;
  onRegister: () => void;
}
/* Share, Explore, Register */
const Shield = ({ onClick, img, onRegister, onShare, title }: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div
          onClick={() => {
            onClick();
            setIsActive(true);
          }}
          className={style["shield"]}
        >
          <div className={style["shieldFront"]}></div>
          <div className={style["shieldBack"]}>
            <div className="w-[65%] h-[65%] flex flex-col bg-white rounded-xl m-auto">
              <img
                src={img}
                className="object-contain h-70%"
                alt="no img found!"
              />
              <div className="">
                <h4 className="">{title}</h4>
                <div className="flex gap-3 px-1">
                  <button
                    className="px-4 py-2 bg-yellow-300 rounded-md hover:bg-yellow-400 transition-all duration-150"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRegister();
                    }}
                  >
                    Register Now
                  </button>

                  <button
                    className="px-4 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-400 transition-all duration-150"
                    onClick={(e) => {
                      e.stopPropagation();
                      onShare();
                    }}
                  >
                    Share Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 w-72">
          <img src="/tags/ai-tag.png" alt="" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Shield;
