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
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const [products, setProducts] = React.useState([]);
const [isLoading, setLoading] = React.useState(true);

 const OnMenuGenerated = async ()=> {
  await sleep(300);
  const response= await fetch('/myoptim/get/gramms', {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json'
    }
  }).then(response => {
  if (response.data.isResult) {
    console.log(response.data.menu_breakfast);
    setProducts(response.data.menu_breakfast);
    setLoading(false);
  } 
  else {
}
})
.catch(error => {
console.error('Error:', error);
});}
  
  


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
