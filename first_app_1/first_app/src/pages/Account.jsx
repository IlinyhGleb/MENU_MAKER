import {HeaderAccount} from "../components/HeaderAccount";
import { ManyFridges } from "../components/ManyFridges";
import axios from 'axios';
import React, {useEffect,useState} from 'react';

const Account = () => {
  const [fridges, setFridges] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);


  useEffect(()=>{
    axios.get('/users/fridges')
    .then( res=>{
        var data = JSON.parse(res.data.fridges);
        setFridges(data);
        setLoading(false);
        
        
    })
    .catch(err=> {console.log(err); setLoading(false);})
  },[])
  
    return (
      <>
        <section className="section account_section">
          <HeaderAccount />
        </section>  
        <section className="section account_body">
          <ManyFridges myFridges={fridges} isLoading={isLoading}/>
        </section>
       
      </>
    );
  };
  
  export {Account};
  