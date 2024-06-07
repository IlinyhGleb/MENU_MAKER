import React from 'react';
import { Skeleton } from './Skeleton';
import { Product } from './Product';

export const Products = ({ breakfast,lunch,dinner,snack, isLoading }) => {
  return (
    <>
      
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="menu_prods" id="menu">
        <div className="menuData">
          <div className="menuTitle"> Завтрак</div>
          <div className="menuProducts">
            {breakfast.map((obj)=>
          
            <Product key = {obj.id} caloricity = {obj.caloricity} category_id={obj.category_id}  product_name = {obj.product_name} weight={obj.weight} weight_for_one={obj.weight_for_one}/>
            )}
          </div>
        </div>
        <div className="menuData">
          <div className="menuTitle"> Обед</div>
          <div className="menuProducts">
            {lunch.map((obj)=>
          
            <Product key = {obj.id} caloricity = {obj.caloricity} category_id={obj.category_id}  product_name = {obj.product_name} weight={obj.weight} weight_for_one={obj.weight_for_one}/>
            )}
          
          </div>
        </div>
        <div className="menuData">
          <div className="menuTitle"> Ужин</div>
          <div className="menuProducts">
            {dinner.map((obj)=>
          
            <Product key = {obj.id} caloricity = {obj.caloricity} category_id={obj.category_id}  product_name = {obj.product_name} weight={obj.weight} weight_for_one={obj.weight_for_one}/>
            )}
          </div>
        </div>
        <div className="menuData">
          <div className="menuTitle"> Перекус</div>
          <div className="menuProducts">
            {snack.map((obj)=>
          
            <Product key = {obj.id} caloricity = {obj.caloricity} category_id={obj.category_id}  product_name = {obj.product_name} weight={obj.weight} weight_for_one={obj.weight_for_one}/>
            )}
          </div>
        </div>
        </div>
      )}
     
    </>
  );
};