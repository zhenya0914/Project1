'use client'
import Image from "next/image"
import left_arrow from "../../images/left_arrow.png"
import right_arrow from "../../images/right_arrow.png"
import example from "../../images/example.webp"

export default function Main() {
  return (
    <>
    <div className="main_page">
        <div className="main_main_promotion">
          <div className="main_main_promotion_button">
            <Image src={left_arrow} className="main_main_promotion_button_prev"></Image>
          </div>

          <Image src={example} className="main_main_promotion_picture"></Image>

          <div className="main_main_promotion_button">
            <Image src={right_arrow} className="main_main_promotion_button_next"></Image>
          </div>
        </div>
    </div>
    </>
  );
}