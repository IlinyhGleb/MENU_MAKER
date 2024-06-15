import React from 'react';
import { Skeleton } from './Skeleton';
import { Fridge } from './Fridge';

export const ManyFridges = ({ myFridges, isLoading }) => {
  
  return (
    <>
    {isLoading ? (
        <div className="skeleton-list">
        </div>
      ) : (
      <div className="fridges">
        <div className="fridges_header"> <p>Мои холодильники</p> <button title="Добавить холодильник" className="addFridge" 
        onClick={() => {
          window.location.replace("/add_fridge");}}
        >+</button> 
      </div>
        {myFridges.map((obj)=>
          <Fridge id = {obj.id} name = {obj.name}/>
        )}
      </div>
     
    )}
    </>
  );
};