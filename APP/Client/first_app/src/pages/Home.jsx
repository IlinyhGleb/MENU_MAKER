import { useNavigate } from "react-router-dom";
import {Header} from "../components/Header";
import {Hero} from "../components/Hero";
import axios from 'axios';
import React, {useEffect,useState} from 'react';


function Home () {
  const [name,setName] = useState('')
  const navigate = useNavigate()
useEffect(()=>{
  axios.get('/api')
  .then( res=>{
    if(res.data.valid){
      setName(res.data.username);
      navigate('/main');
    }
  })
  .catch(err=> console.log(err))
},[])


  return (
    <>
    
      <section className="section header">
        <Header />
      </section>  
      <section className="section hero_section">
        <Hero />
      </section>
    </>
  );
};

export default Home;
