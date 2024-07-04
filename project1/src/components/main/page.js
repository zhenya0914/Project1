'use client'
import Carousel from "../carousel";
import Image from "next/image"
import main_1 from "../../images/main_1.webp"

export default function Main() {
  return ( 
    <> 
    <Carousel></Carousel>
    <div className="main_page">
   
        <p className="main_main_paragraph"/>
        <div className="main_main_box">
          <div id="main_main_prod_list">
            <div id="main_main_prod">
              <Image src={main_1} width={250} height={250}></Image>
              <div id="main_main_prod_description">
                бла бла бла
              </div>
            </div>
            <div id="main_main_prod">
              !-- картинка товара
              <div id="main_main_prod_description">
                бла бла бла
              </div>
            </div>
            <div id="main_main_prod">
              !-- картинка товара
              <div id="main_main_prod_description">
                бла бла бла
              </div>
            </div>
            <div id="main_main_prod">
              !-- картинка товара
              <div id="main_main_prod_description">
                бла бла бла
              </div>
            </div>
            <div id="main_main_prod">
              !-- картинка товара
              <div id="main_main_prod_description">
                бла бла бла
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}