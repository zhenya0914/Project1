'use client'
import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react";
import shopping_cart from "../../images/shopping_cart.png"
import sign_in from "../../images/sign_in.png"
import favorites from "../../images/favorites.png"
import paro from "../../images/paro_white.png"

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const handle_search_change = (event) => {
        setSearchTerm(event.target.value);
    };
    const handle_search_submit = (event) => {
        event.preventDefault();
        console.log('Поиск:', searchTerm);
    };
    return(
        <div className="header_box">
            <div className="header_header">
                <div className="header_header_left">
                    <div id="header_header_left_marketplace_name">
                    <a href="/">
                    <Image src={paro} width={150}></Image>
                    </a>   
                    </div>
                    <div id="header_header_left_button">
                        <button id="header_header_left_catalog">
                            <div>Каталог</div>
                        </button>
                    </div>
                </div>
            
                <div className="header_header_center">
                    <form className= "header_search_form" onSubmit={handle_search_submit}>
                        <input  type = "text"  className="header_search_input"  value ={searchTerm} onChange={handle_search_change} placeholder="Искать на Paro" />
                        <button type="submit" className="header_search_button">Поиск</button>
                    </form>


                </div>
                <div className="header_header_right">
                    <div className="header_header_right">Заказы</div>
                    <div className="header_header_right">
                        <a href="/login" id="header_header_right_items_with_icons">
                            <Image href="/login" src={sign_in} width={25} height={25}></Image>
                            <div>Войти</div>
                        </a>
                    </div>
                    <div className="header_header_right">
                        <div id="header_header_right_items_with_icons">
                            <Image src={favorites} width={25} height={25}></Image>
                            <div>Избранное</div>
                        </div>
                    </div>
                    <div className="header_header_right">
                        <div id="header_header_right_items_with_icons">
                            <Image src={shopping_cart} width={25} height={25}></Image>
                            <div>Корзина</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}