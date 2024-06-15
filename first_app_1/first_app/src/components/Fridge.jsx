import React, {useEffect,useState} from 'react';
import imgUp from "../assets/img/arrow_up.jpg";
import imgDown from "../assets/img/arrow_down.jpg";
import { Product } from './Product';
import axios from 'axios';
import querystring from 'query-string';

export const Fridge = ({id, name}) => {
    const [opened, setOpened] = useState(false);
    const [products, setProducts] = React.useState([]);

    useEffect(()=>{
        const i = parseInt(id);
        console.log(id);
        const body = {ref_id: i };
        axios.post('/users/prods_in_fridge',body)
        .then( res=>{
            console.log(res.data.products);
            var data = JSON.parse(res.data.products);
            setProducts(data);
        })
        .catch(err=> console.log(err))
      },[])

    function changeState() {
        setOpened(!opened);
    }


    if(opened){
        return(
            <div className="fridge">
                <div className="one_fridge">
                  <p>{name}</p>
                  <button title="Свернуть" onClick={changeState}><img src = {imgUp}/></button>
                  </div>
                  <div className="prods_in_fridge">
                    <div className="prod_header">
                        <p>Название продукта:</p>
                        <p>Количество:</p>
                    </div>
                    {products.map((obj)=>
                        <Product key = {obj.id} caloricity = {obj.caloricity} category_id={obj.category_id}  product_name = {obj.name} weight={obj.gramms} weight_for_one={obj.weight_for_one}/>
                    )}
                  </div>
            </div>
            
        
          )
    }
    else{
        return(
            <div className="fridge">
                <div className="one_fridge">
                  <p>{name}</p>
                  <button title="Развернуть" onClick={changeState}><img src = {imgDown}/></button></div>
            </div>
        
          )
    }
 
  
};