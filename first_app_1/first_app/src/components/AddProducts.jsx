import React, {useEffect,useState} from 'react';
import {addProductsData, categories} from '../mockData/addProductsData';
import { Form, Field } from "react-final-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import querystring from 'query-string';
import { buttonsData } from '../mockData/headerData';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const ProductTemplate=({prods, name, isLoading, AddProd, DeleteProd})=>{
    if (isLoading){
        return(
            <div className="prods_for_selection">
                
            </div>
       );
    }
    else{
        return(
            <div className="prods_for_selection">
                <div className="selection_header"> 
                Выберите продукты из категории: {name} 
                </div>
                <div className="selection_product">
                    {prods.map((obj, index)=>
                    <ProdTemplate key={index} name = {obj.name} AddProd={AddProd} DeleteProd={DeleteProd}/>
                    )}
                   
                </div>
            </div>
       );
    }
    
}

export const ProdTemplate=({name, AddProd, DeleteProd})=>{
    const [checked, setChecked] = useState(false);
    function change(){
        if(checked){
            DeleteProd(name);
        }
        else{
            AddProd(name);
        }
        setChecked(!checked);
    }
    return(
        <label className="prod">
            <input type="checkbox"  onClick={change}/>
            <p>{name}</p>

        </label>
    );
}

export const ProdNewTemplate=({addProductsData, AddProd})=>{
    const [selectedCategory, setSelectedCategory] = useState(); 
    return(
        <>
            <Form
              onSubmit={onSubmit}
              validate={(values) => {
                const errors = {};
                
                if (!values.name) {
                  errors.name = "*";
                }
                else if (!values.caloricity) {
                  errors.caloricity = "*";
                }
                else{
                    AddProd(values.name)
                }
                return errors;
              }}
              render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                  
                  <Field name="name">
                    {({ input, meta }) => (
                      <div>
                        <input {...input} type="text" placeholder="Название" />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field name="category_id">
                    {({ input, meta }) => (
                      <select {...input}
                      value={selectedCategory} 
                      onChange={e => {setSelectedCategory(e.target.value); values.category_id=e.target.value;}} 
                    >
                      {addProductsData.map((obj)=>
                              <AllCategoriesTemplate id={obj.id} name = {obj.name}/>
                      )}
                      
                    </select>
                    )}
                  </Field>
                  <Field name="caloricity">
                    {({ input, meta }) => (
                      <div>
                        <input {...input} type="number" placeholder="Калорийность" />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  
                  
                  <div className="buttons_in">
                    <button type="submit"  disabled={submitting}>
                      Добавить
                    </button>
                  </div>
                  
                </form>
                
              )}
            />
        </>)}
        
const onSubmit = async (values) => {
    await sleep(300);
 
    const body= {
    "name": values.name,
    "caloricity": values.caloricity,
    "category_id": values.category_id,
    "weight_for_one": "0"
    };
    const response= await fetch('/products_add', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
        if (response.ok) {
            alert("Продукт успешно добавлен!");
           
        } else {
          alert("Ошибка");
        }
        })
        .catch(error => {
        console.error('Error:', error);
        });
        
        
       
};
    

export const AllCategoriesTemplate=({id,name})=>{
    return(
        <option value={id}>{name}</option>
    )
}

export const AddedProductsTemplate = ({added,ready})=>{
    

    if(ready){
        return(
          
            <div className="added" >
            <p>Теперь давайте введем граммовки продуктов:</p>
            {added.map((obj, index)=> 
                <div className="one_added">
                <div className="name"><p2>{index+1}.{" "}{obj}</p2></div>
                <div className="amount">
                <input type="number" step="10" defaultValue="200" ></input>
                </div>
                
                </div>
                
              )}
            </div>
            );
    }
    
}

export const FridgeNameTemplate = ({setNewname, ready, show,AddFridge})=>{
  if(ready){
    return(
    <div className="fridge_name">
        <p2>Давайте дадим название холодильнику:</p2>
        <InputFridgeTemplate setNewname={setNewname} show={show} AddFridge={AddFridge}/>
    </div>
  )
  }
  
}

export const InputFridgeTemplate=({setNewname, show, AddFridge})=>{
  const submit= async (values) =>{
    setNewname(values.name);
    AddFridge();
  }
  return(
    <>
        <Form
          onSubmit={submit}
          validate={(values) => {
            const errors = {};
            
            if (!values.name) {
              errors.name = "*";
            }
           
            return errors;
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              
              <Field name="name">
                {({ input, meta }) => (
                  <div>
                    <input {...input} type="text" placeholder="Название холодильника"  />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              
              <div className="buttons_in">
                <button type="submit"   onClick={show} disabled={submitting}>
                  Сохранить холодильник
                </button>
              </div>
            </form>
            
          )}
        />
    </>)
}

export const NextStepTemplate=({ready,show})=>{
  if(ready){
    return(
      <button className="button_ready" 
      onClick={() => {
        show();
        }}
      > Перейти к следующему шагу</button>
    )
  }
}

export const GenerateOrBackTemplate=({ready, mybuttonsData})=>{
  
    if(ready){
      return(
        <div className="continue">
          <p>Хотите сгенерировать меню по этому холодильнику?</p>
           <div className="buttons_continue">
              <button onClick={()=>{window.location.href="/account"}}>В личный кабинет</button>
            </div> 
            <div className="buttons_continue_primary">
              <button onClick={()=>{window.location.href="#"}}>Сгенерировать!</button>
            </div> 
        </div>
      )
    }
}
export const LowButtonsTemplate=({mybuttonsData})=>{
  return mybuttonsData.map((obj, index)=>{
    <LowButtonTemplate  obj={obj} key={index}/>
   
   })
}


export const LowButtonTemplate=({obj})=>{
  const {name, href, isPrimary} = obj;
 console.log(obj);
  if(isPrimary){
    return(
      <div>
    <button className="buttons_primary_in">{name}</button></div>
  )}
  else {
    return(
      <div className="hithere">
    <button className="buttons_notPrimary_in">{name}</button></div>
  )}
}

export const AddProducts = () => {
  const { categories, mybuttonsData} = addProductsData;
  
    const [kashi, setKashi] = React.useState([]);
    const [krupi, setKrupi] = React.useState([]);
    const [myaso, setMyaso] = React.useState([]);
    const [fructi, setFructi] = React.useState([]);
    const [orehi, setOrehi] = React.useState([]);
    const [muchnoe, setMuchnoe] = React.useState([]);
    const [molochnie, setMolochnie] = React.useState([]);
    const [ovoshi, setOvoshi] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const [added, setAdded] = React.useState([]);
    const [ready1, setReady1] = React.useState(false);
    const [ready2, setReady2] = React.useState(false);
    const [ready3, setReady3] = React.useState(false);
    const [newname,setNewname] =React.useState('');
    const [amount, setAmount] = React.useState([]);


    function AddProd(name){
        
        var data = added;
        data.push(name);
        setAdded(data);
       
    }

    function DeleteProd(name){
        
        var data = [];
        added.forEach(element => {
            if(element != name){
                data.push(element);
            }
        });
        setAdded(data);
        
    }

    useEffect(()=>{
        
        axios.get('/select_prods')
        .then( res=>{
            
            setKashi(JSON.parse(res.data.kashi));
            setKrupi(JSON.parse(res.data.krupi));
            setMyaso(JSON.parse(res.data.myaso));
            setFructi(JSON.parse(res.data.fructi));
            setOrehi(JSON.parse(res.data.orehi));
            setMuchnoe(JSON.parse(res.data.muchnoe));
            setMolochnie(JSON.parse(res.data.molochnie));
            setOvoshi(JSON.parse(res.data.ovoshi));
           
            setLoading(false);
            
        })
        .catch(err=> console.log(err))
      },[])
      
      function Show(){
        setReady1(!ready1);
      }
      function Show2(){
        setReady2(!ready2);
      }
      function Show3(){
        setReady3(!ready3);
      }



      const AddFridge=()=>{/*
        const body1 = {name:newname };
        var data = 0;
        axios.post('/fridge_add',body1)
        .then( res=>{
           data = JSON.parse(res.data.fridge_id);
        })
        .catch(err=> console.log(err))


        var count=0;
        added.forEach(element => {
          const body2 = {name:element, gramms: amount[count], fridge_id: data};
          axios.post('/add_product_in_fridge',body2)
          .then( res=>{
            if(res.ok){
            alert("продукт " +name+" добавлен");
            }
          })
          .catch(err=> console.log(err))
          count = count + 1;
        });*/
      }


      return(
      <>
        <section className="selection">
            <ProductTemplate prods={kashi} name="Каши" isLoading={isLoading} AddProd={AddProd} DeleteProd={DeleteProd}/>
            <ProductTemplate prods={krupi} name="Крупы" isLoading={isLoading} AddProd={AddProd} DeleteProd={DeleteProd}/>
            <ProductTemplate prods={myaso} name="Мясо и рыба" isLoading={isLoading} AddProd={AddProd} DeleteProd={DeleteProd}/>
            <ProductTemplate prods={fructi} name="Фрукты" isLoading={isLoading} AddProd={AddProd} DeleteProd={DeleteProd}/>
            <ProductTemplate prods={orehi} name="Орехи" isLoading={isLoading} AddProd={AddProd} DeleteProd={DeleteProd}/>
            <ProductTemplate prods={muchnoe} name="Мучное" isLoading={isLoading} AddProd={AddProd} DeleteProd={DeleteProd}/>
            <ProductTemplate prods={molochnie} name="Молочные продукты" isLoading={isLoading} AddProd={AddProd} DeleteProd={DeleteProd}/>
            <ProductTemplate prods={ovoshi} name="Овощи" isLoading={isLoading} AddProd={AddProd} DeleteProd={DeleteProd}/>

        </section>
        <section className="add_new_prod">
            <p2> Не нашли свой продукт в списке? Добавьте его вручную:</p2>
            <ProdNewTemplate addProductsData={categories} AddProd={AddProd}/>
        </section> 
        <section className="add_gramms" >
            <button className="button_ready" onClick={Show}> Перейти к следующему шагу</button>
            <AddedProductsTemplate added={added} ready={ready1} />
           
        </section>
        <section className="add_name" >
           
            <NextStepTemplate ready={ready1} show={Show2}/>
            <FridgeNameTemplate setNewname={setNewname} show={Show3} ready={ready2} AddFridge={AddFridge}/>
        </section>
        <section className="continue_menu">
          <GenerateOrBackTemplate ready={ready3} mybuttonsData={mybuttonsData} />
        </section>
    </>
      );



};