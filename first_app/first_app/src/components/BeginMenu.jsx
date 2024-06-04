import {Link} from "react-router-dom";
import beginMenuData from "../mockData/beginMenuData";
import { Form, Field } from "react-final-form";
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Cell from 'react-table';
import Restart from "../assets/img/restart.svg";


import { Skeleton } from './Skeleton';
import { Product } from './Product';

export const HeaderTemplate = ({headerData}) => {
    const {text} = headerData;
    return (<h3 >{text}</h3>)
};

export const ButtonTemplate = ({ beginButton }) => {
    const {title, href, isPrimary} = beginButton;
    return (
      <Link to={href}> 
       <button className={`cta_buttons__signin btn${isPrimary ? " primary-btn" : ""}`}>
        {title}
       </button>
      </Link>
    );
 };   

 export const ProductTemplate = ({product}) => {
    const {data, gr} = product;
    return ( 
    <div className="prod">
        <div className="products">
            {data}
        </div>
        <div className="gr">
        {gr}
    </div>
    </div>
    );
 }

 export const MenuTemplate = ({menuData}) => {
    const {title, products} = menuData;
    return (
        <div className="menuData">
            <div className="menuTitle">
            {title}
            </div>
            <div className="menuProducts">
            
            <Template products = {products}/>
            </div>
        </div>
    );
 }

 export const Template = ({products}) => {
    return  products.map((product, index) => (
        <ProductTemplate key ={index} product={product} />
        ))
 }


export const FormTemplate=({beginButton})=>{
    const {title, href, isPrimary} = beginButton;
     
    return (
        
        <Form
          onSubmit={onSubmit}
         
          validate={(values) => {
          const errors = {};
      
          if (!values.kalories) {
            errors.kalories = "*";
          }
          return errors;
          }}
    
          render={({ handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
        
            <Field name="kalories">
              {({ input, meta }) => (
            <div><div className="Input">Введите количество калорий</div>
              <input {...input} type="number" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
       
        <div className="btn_center">
       <button type="submit"   disabled={submitting}  className={`cta_buttons__signin btn${isPrimary ? " primary-btn" : ""}`} >
        {title}
       </button>
      </div>
      
      </form>
    
    )}
  />
 
); 
} 

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const onSubmit = async (values) => {
    await sleep(300);
    const body= {
      "food_energy_goal": values.kalories,
      "ref_id": 1
     };
  
  const response= await fetch('/myoptim', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
  if (response.ok) {
      
        //window.location.href = "#menu";
  }
  })
    .catch(err=> console.log(err))
  };
   

   
 

    
    export const LogoTemplate = ({ logoData }) => {
      const { alt, href } = logoData;
    
      return (
        <div className="logo">
          <a href={href} className="logo__link">
            <img className="link__name" src={Restart} alt={alt} />
          </a>
        </div>
      );
    };
 
   
   


const BeginMenu = () => {
    const {
        headerData, 
        beginButton, 
        breakfastData,
        lunchData,
        dinnerData,
        breakData,
        restartButton
    } = beginMenuData
  

    return (
        <>
        <div className="hero_section_center" >
          <HeaderTemplate headerData = {headerData} />  
          <FormTemplate  beginButton={beginButton} />  
        
          <div className="menu" id="menu">
            {/*<MenuTemplate menuData = {breakfastData} />
            <MenuTemplate menuData = {lunchData} />
            <MenuTemplate menuData = {dinnerData} />
    <MenuTemplate menuData = {breakData} />*/}

             
          </div>
          <LogoTemplate logoData={restartButton}/>
        </div>
        </>
      );
};

export {BeginMenu};
