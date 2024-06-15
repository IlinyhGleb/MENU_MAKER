import {HeaderAccount} from "../components/HeaderAccount";
import { AddProducts } from "../components/AddProducts";
import axios from 'axios';
import React, {useEffect,useState} from 'react';

const AddFridge = () => {
 

    return (
      <>
     
        <section className="section account_section">
          <HeaderAccount />
        </section>  
       
       <section className="section add_prods_in_fridge_section">
       <div className="products_header_select">
        <p>Давайте создадим холодильник</p>
        <p2>Добавьте продукты, которые у вас есть:</p2>
       </div>
          <AddProducts />
        </section>  
        
      </>
    );
  };
  
  export {AddFridge};
  