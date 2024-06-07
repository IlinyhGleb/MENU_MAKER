import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import headerData from "../mockData/headerData";
import Logo from "../assets/img/logo.jpg";
import React  from "react";

// блокируем и разблокируем скролл во время открытия модального окна
const body = document.querySelector("body");
const noOverflow = () => body.classList.add("oh");
const overflow = () => body.classList.remove("oh");

export const LogoTemplate = ({ logoData }) => {
  const { text, href } = logoData;
  return (
    <div className="header__logo">
        <div className="header__logo__name" >
        MENU MAKER
        </div>    
    </div>
  );
};

export const BurgerTemplate = ({ isBurgerActive, setIsMenuShown }) => (
  <div
    className={
      isBurgerActive ? "header__burger_menu " : "header__burger_menu hidden"
    }
    onClick={() => {
      setIsMenuShown(true);
      noOverflow();
    }}
  >
    <div className="burger_menu__line"></div>
    <div className="burger_menu__line"></div>
    <div className="burger_menu__line"></div>
  </div>
);



export const MenuItemTemplate = ({ menuItemData }) => {
  const { title, href } = menuItemData;

  return (
    <li className="menu__item">
      <a href={href} className="item__link">
        {title}
      </a>
    </li>
  );
};


export const ButtonTemplate = ({ buttonData }) => {
  // console.log(buttonData);
  const { title, href, isPrimary } = buttonData;
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const messageHandler = (event) => {
      if (event.origin=='http://localhost:3000/authorization') { // родитель уверен, что сигнал от надежного источника
        alert('sss'); 
        window.frames.close();
      };
    };
    window.addEventListener('message', messageHandler);
  
  return () => window.removeEventListener('message', messageHandler);
  }, []);

  return (
    
    <div>
      {shown? <iframe id = "iframe" src={href}/> : null}
      
      <button
        className={`cta_buttons__signin btn${isPrimary ? " primary-btn" : ""}`}
        onClick={() => setShown(!shown)}
      >
        {title}
      </button>

    </div>
    
  );
};

// функция создания шаблона с параметрами правой части меню
export const RightHeaderTemplate = ({
  rightHeaderData,
  isBurgerActive,
  isMenuShown,
  setIsMenuShown,
}) => {
  const { menuData, buttonsData } = rightHeaderData;

  return (
    <>
      <div className={isMenuShown ? "header__right" : "header__right hidden"}>
        <aside className="header__menu">
          <div
            className={isBurgerActive ? "menu__close" : "menu__close hidden"}
            onClick={() => {
              setIsMenuShown(false);
              overflow();
            }}
          >
            <div className="menu__line"></div>
            <div className="menu__line"></div>
          </div>
          <ul className="menu">
            {menuData.map((item, index) => (
              <MenuItemTemplate key={index} menuItemData={item} />
            ))}
          </ul>
        </aside>
        <div className="cta_buttons">
          {buttonsData.map((button, index) => (
            <ButtonTemplate key={index} buttonData={button} />
          ))}
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);

  const { logoData, menuData, buttonsData } = headerData;

  useEffect(() => {
    const updateBurgerState = () => {
      const width = window.innerWidth;

      if (width <= 1024) {
        overflow();
        setIsBurgerActive(true);
        setIsMenuShown(false);
        return;
      }

      setIsBurgerActive(false);
      setIsMenuShown(true);
    };

    updateBurgerState();

    // вешаем прослушку события резсайза для обновления состояния бургера
    window.addEventListener("resize", updateBurgerState);

    // возвращаем функцию очистки прослушки на ресайз окна
    return () => {
      window.removeEventListener("resize", updateBurgerState);
    };
  }, []);
  return (
    <>
      <LogoTemplate logoData={logoData} />
      <BurgerTemplate
        isBurgerActive={isBurgerActive}
        setIsMenuShown={setIsMenuShown}
      />
      <RightHeaderTemplate
        rightHeaderData={{ menuData, buttonsData }}
        isBurgerActive={isBurgerActive}
        isMenuShown={isMenuShown}
        setIsMenuShown={setIsMenuShown}
      />
    </>
  );
};

export {Header};
