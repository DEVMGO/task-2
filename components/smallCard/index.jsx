import React from "react";
import Image from "next/image";
import picture from "../../public/assets/image/futuer.png";
import style from "./style.module.css";

const SmallCard = () => {
  return (
    <>
      <div className={style.smallCard}>
        <div className={style.card}>
          <div className={style.dataCard}>
            <h4>The Future</h4>
            <Image src={picture} alt="future" />
            <p>
              Free your mind for someting <b>more important</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
