import { useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom";
import { heroData } from "../mockData/heroData";
import food2 from "../assets/img/menuMakerBack.jpg";

export const HeaderTemplate = ({ header }) => {
  return <h1 className="center_header">{header}</h1>;
};

export const DescriptionTemplate = ({ description }) => {
  return <p className="left__description">{description}</p>;
};

export const ButtonTemplate = ({ ctaButton }) => {
  const {title, href, isPrimary} = ctaButton;
  const ref = useRef(null)
  return (
    <Link to={href}> 
     <button className={`cta_buttons__signin btn${isPrimary ? " primary-btn" : ""}`}
     onClick={() => {
      window.location.href = "#beginning_of_menu";}}
    >
      {title}
     </button>
    </Link>
  );
};

export const ButtonsTemplate = ({ ctaButtons }) => {
  return (
    <div className="left__cta_buttons">
      {ctaButtons.map((ctaButton, index) => (
        <ButtonTemplate key={index} ctaButton={ctaButton} />
      ))}
    </div>
  );
};

export const IllustrationTemplate = ({ illustration }) => {
  const { alt } = illustration;

  return <img src={food2} alt={alt} />;
};

const Hero = () => {
  const { header, description, illustration, heroCtaButtons } = heroData;
  // console.log(heroCtaButtons);
  return (
    <>
    
      <div className="menu_maker_section__left">
        <HeaderTemplate header={header} />
        <DescriptionTemplate description={description} />
        <ButtonsTemplate ctaButtons={heroCtaButtons} />
      </div>
     
    </>
  );
};

export {Hero};
