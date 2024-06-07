
import React, {useEffect,useState} from 'react';
export const Product = ({caloricity,category_id, id,product_name,weight,weight_for_one}) => {
  function MyRound10(val) {
    return Math.round(val / 10) * 10;
  }
  
  const [value_in_one,setValue] = useState(MyRound10(weight)+" грамм");
  const [checked, setChecked] = useState(true);
  function changeCheckbox() {
    
    
    if(checked){
      setValue(Math.ceil(weight/weight_for_one)+" шт.");
    }
    else{
      setValue(MyRound10(weight)+" грамм");
    }
    setChecked(!checked);
 }


  if(weight_for_one > 0){
    return(
      <div className="prod">
       <div className="products">
          {product_name}
        </div>
        <label>
          <input type="checkbox" checked={checked} onChange={changeCheckbox} />
          <span className="slider"></span>
        </label>
        <div className="gr">
        {value_in_one} 
        </div>
        
      </div>
  
    )
  }
  else{
    return(
      <div className="prod">
       <div className="products">
          {product_name}
        </div>
        <div className="gr">
        {MyRound10(weight)} грамм
        </div>
      </div>
  
    )
  }
  
};