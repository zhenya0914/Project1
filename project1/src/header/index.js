'use client'
import React, { useState } from "react";
import {Image} from 'react';

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
        <div className="header_header">
            <div className="header_header_left">
                <div id="header_header_left_marketplace_name">Paro</div>
                <div id="header_header_left_button"><button id="header_header_left_catalog"><div>Каталог</div></button></div>
            </div>
            
            <div className="header_header_center">
                <form className= "header_search_form" onSubmit={handle_search_submit}>
                    <input  type = "text"  className="header_search_input"  value ={searchTerm} onChange={handle_search_change} placeholder="Искать на Paro" />
                    <button type="submit" className="header_search_button">Поиск</button>
                </form>


            </div>
            <div className="header_header_right"></div>
        </div>
    )
}