import { useNavigate } from "react-router-dom";
import {Header} from "../components/Header";
import {Hero} from "../components/Hero";
import axios from 'axios';
import React, {useEffect,useState} from 'react';
import {BeginMenu} from "../components/BeginMenu";
import {Products} from "../components/Products";
import {GetMenuButton} from "../components/GetMenuButton";
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

const [products, setProducts] = React.useState([]);
const [isLoading, setLoading] = React.useState(true);

 const OnMenuGenerated = data => {
  
    setProducts(data);
    setLoading(false);
 
};
  
  


  return (
    <>
    
      <section className="section header">
        <Header />
      </section>  
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section hero_section" id="beginning_of_menu">
        <BeginMenu />
        <Products items={products} isLoading={isLoading}/>
        <GetMenuButton OnMenuGenerated={OnMenuGenerated}/>
      </section>
    </>
  );
};

export default Home;
