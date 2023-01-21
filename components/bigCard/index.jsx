import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import Dots from "../../public/assets/image/dots.png";
import style from "./style.module.css";

const BigCard = () => {
  return (
    <>
      <div className={style.bigCard}>
        <div className={style.card}>
          <div className={style.dataCard}>
            <span>
              <Image src={Dots} alt="dots" />
            </span>

            <div className={style.cardFooter}>
              <p>Because your business needs a lot more</p>
              <button>
                {" "}
                Get expert advise{" "}
                <span>
                  <HiArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCard;
