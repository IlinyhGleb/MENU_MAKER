import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import React  from "react";

import { accountData, headerAccountData, logoData } from "../mockData/headerAccountData";
import { Account } from "../pages/Account";

export const ItemBoxTemplate = ({menu_box}) => {
    const {title, href} = menu_box;
    return(
        <li>
            <a href={href} className="menu__item">
                {title}  
            </a>   
        </li> 
)};

export const BoxTemplate = ({menu_box}) => {
    return (
      <ul >
        {menu_box.map((item, index) => (
          <ItemBoxTemplate key={index} menu_box={item} />
      ))}
      </ul>
)};

export const BurgerTemplate = ({menu_box}) => {
    return (
        <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
            <span></span>
            </label>
            <div class="menu__box"> {BoxTemplate({menu_box})} </div>
        </div>
    );
};

export const LogoTemplate = ({logoData}) => {
    return (
        <div className="header_right">
            {logoData}
        </div>
    )
};

export const AccountTemplate = ({accountData}) => {
    return (
        <div className="header_center">
            {accountData}
        </div>
    )
}

const HeaderAccount = () => {
    const { menu_box, logoData, accountData } = headerAccountData;

    return (
      <>
        <div className="account_section_header">
            <BurgerTemplate menu_box={menu_box} />
            <AccountTemplate accountData={accountData}/>
            <LogoTemplate logoData={logoData}/>
        </div>
        
      </>
    );
  };
  
  export {HeaderAccount};