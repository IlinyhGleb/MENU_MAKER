import { useNavigate } from "react-router-dom";
import {Hero} from "../components/Hero";
import { NewHeader } from "../components/NewHeader";
import axios from 'axios';
import React, {useEffect,useState} from 'react';

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
      <section className="section hero_section">
        <Hero />
      </section>
    </>
  );
};
//главная страница, нужно поменять шапку
export default MainPage;
