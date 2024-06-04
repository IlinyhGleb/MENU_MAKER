import React from 'react';
import { Skeleton } from './Skeleton';
import { Product } from './Product';

export const Products = ({ items, isLoading }) => {
  return (
    <>
      
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="products-list">
          {items.map((obj)=>
          <Product key = {obj.id} caloricity = {obj.caloricity} category_id={obj.category_id}  product_name = {obj.product_name} weight={obj.weight} weight_for_one={obj.weight_for_one}/>
          )}
         
        </ul>
      )}
     
    </>
  );
};