import { ManyFridges } from "../components/ManyFridges";
import { HeaderAccount } from "../components/HeaderAccount";
import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { FridgeLink } from "../components/FridgeLink";

const FridgeChoise = () => {
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
          
          <div className="fridge_section_header">
            Давайте выберем холодильник для генерации меню:
          </div>
          
          
          <section className="section account_body">
            <ManyFridges myFridges={fridges} isLoading={isLoading}/>
          </section>
          <section className="section choise">
            <FridgeLink />
          </section>
        </>
      );
    };
    
    export {FridgeChoise};
    