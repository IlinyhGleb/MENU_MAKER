import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import NewHeaderData from "../mockData/NewHeaderData";
import Modal from 'react-modal';
import axios from 'axios';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// блокируем и разблокируем скролл во время открытия модального окна
const body = document.querySelector("body");
const noOverflow = () => body.classList.add("oh");
const overflow = () => body.classList.remove("oh");

export const LogoTemplate = ({ logoData }) => {
  const { alt, href, src } = logoData;

  return (
    <div className="header__logo">
      <Link to={href} className="logo__link">
        <img className="link__name" src={src} alt={alt} />
      </Link>
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
  
 
    

  return (
    <Link to={href}>
      <button
        className={`cta_buttons__signin btn${isPrimary ? " primary-btn" : ""}`}
        onClick={() => {
          
          if (href=='/'){Logout();}}}
      >
        {title}
      </button>
    </Link>
  )
  

  
};

const Logout = async () => {
  await sleep(300);
const response= await fetch('/api/logout', {
  method: 'GET',
  // We convert the React state to JSON and send it as the POST body
  
  headers: {
    'Content-Type': 'application/json'
  }


}).then(response => {
if (response.ok) {
  alert("Вы успешно вышли!");
  window.location.replace("/");
  

} else {
  alert("Что-то пошло не так");
}
})
.catch(error => {
console.error('Error:', error);
});



};




// функция создания шаблона с параметрами правой части меню
export const RightHeaderTemplate = ({
  rightHeaderData,
  isBurgerActive,
  isMenuShown,
  setIsMenuShown
  
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

const NewHeader = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const { logoData, menuData, buttonsData } = NewHeaderData;
  
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

export {NewHeader};