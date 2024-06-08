import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { aboutData, illustration } from "../mockData/aboutData";
import food1 from "../assets/img/table1.jpg";
import food2 from "../assets/img/table2.jpg";
import food3 from "../assets/img/table3.jpg";
import food4 from "../assets/img/table4.jpg";

export const HeaderTemplate = ({ header }) => {
  return <div className="left_header">{header}</div>;
};

export const DescriptionTemplate = ({ description }) => {
    return <p className="left__description">{description}</p>;
};


export const IllustrationTemplate = ({ illustration }) => {
  const { alt } = illustration;

  return (
    <div>
      <p>
      <img src={food1} alt={alt}></img>
      <img src={food2} alt={alt}></img>
    </p>
    <p>
      <img src={food3} alt={alt}></img>
      <img src={food4} alt={alt}></img>
    </p>
      
    </div>  
   
  );
};



const About = () => {
    const { header, description} = aboutData;
 
    return (
      <div className="about_section">
        
        <div className="about_section__left">
          <HeaderTemplate header={header} />
          <DescriptionTemplate description={description} />
        </div>
      
        <div className="about_section__right">
         <IllustrationTemplate illustration={illustration} />
        </div>
      </div>
    );
  };
  
  export {About};

