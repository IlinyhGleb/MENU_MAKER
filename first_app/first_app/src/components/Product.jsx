import React from 'react';

export const Product = ({caloricity,category_id, id,product_name,weight,weight_for_one}) => (
  
  <li>
    <div>
      
      <div>
        <h3> {product_name}</h3>
        <p>
          {weight}
        </p>
      </div>
    </div>
   
  </li>
);