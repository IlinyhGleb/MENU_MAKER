import { useNavigate } from "react-router-dom";
import { NewHeader } from "../components/NewHeader";
import axios from 'axios';
import React, {useEffect,useState} from 'react';

import {Hero} from "../components/Hero";
import { About } from "../components/About";
import {BeginMenu} from "../components/BeginMenu";
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
      </section>
    </>
  );
};
//главная страница, нужно поменять шапку
export default MainPage;
