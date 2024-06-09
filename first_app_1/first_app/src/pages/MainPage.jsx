import { useNavigate } from "react-router-dom";
import { NewHeader } from "../components/NewHeader";
import axios from 'axios';
import React, {useEffect,useState} from 'react';
import {Contacts} from "../components/Contacts";
import {Footer} from "../components/Footer";
import {Hero} from "../components/Hero";
import { About } from "../components/About";
import {BeginMenu} from "../components/BeginMenu";
import {Products} from "../components/Products";
import {GetMenuButton} from "../components/GetMenuButton";

import {Faq} from "../components/Faq.jsx";

function MainPage ()  {
  const [name,setName] = useState('')
  const navigate = useNavigate()
useEffect(()=>{
  axios.get('/api')
  .then( res=>{
    if(res.data.valid){
      setName(res.data.username);
      
    }
    else{
      navigate('/');
    }
  })
  .catch(err=> console.log(err))
},[])


const [breakfast, setBreakfast] = React.useState([]);
const [lunch, setLunch] = React.useState([]);
const [dinner, setDinner] = React.useState([]);
const [snack, setSnack] = React.useState([]);
const [isLoading, setLoading] = React.useState(true);

 const OnMenuGenerated = (data_br, data_lu, data_di, data_sn) => {
  
  setBreakfast(data_br);
  setLunch(data_lu);
  setDinner(data_di);
  setSnack(data_sn);
  setLoading(false);
};

  return (
    <>
    
      <section className="section header">
        <NewHeader />
      </section>  
      <section className="section menu_maker_section">
        <Hero />
      </section>
      <section className="section hero_section" id="about_us_block">
        <About />
      </section>
      <section className="section faq_section" id="faq_block">
        <Faq />
      </section>
      <section className="section hero_section" id="beginning_of_menu">
        <BeginMenu />
        <GetMenuButton OnMenuGenerated={OnMenuGenerated}/>
        <Products breakfast={breakfast} lunch={lunch} dinner={dinner} snack={snack} isLoading={isLoading}/>
      </section>
      <section className="section contacts_section" id="contacts_block">
        <Contacts />
      </section>
      <section className="section footer_section" >
        <Footer/>
      </section>
    </>
  );
};
//главная страница, нужно поменять шапку
export default MainPage;
