import React from "react";
import { Form, Field } from "react-final-form";
import {Link} from "react-router-dom";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const SignIn= () => {

return(
 
<><div className="section header"><h1> Форма авторизации</h1></div>
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        
        if (!values.login) {
          errors.login = "*";
        }
        if (!values.password) {
          errors.password = "*";
        }
        
        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          
          <Field name="login">
            {({ input, meta }) => (
              <div>
               
                <input {...input} type="text" placeholder="Логин" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                
                <input {...input} type="password" placeholder="Пароль" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          
          
          <div className="buttons_in">
            <button type="submit" disabled={submitting}>
              Войти
            </button>
            
          </div>
          <div className="links_in">
            <h1>Ещё нет аккаунта? </h1>
          <Link to="/registration" className="auth_link"> Создать.</Link>
         </div>
        </form>
        
      )}
    />
</>)}

const onSubmit = async (values) => {
  await sleep(300);
  const body= {
    "login": values.login,
    "password": values.password,
    
   
};




const response= await fetch('/users/getin', {
  method: 'POST',
  // We convert the React state to JSON and send it as the POST body
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  }


}).then(response => {
if (response.ok) {
  alert("Вы успешно вошли!");
  localStorage.setItem('login',values.login);
  window.location.replace("/main");
  

} else {
  alert("Неверный логин или пароль.");
  values.login=""
  values.password=""
}
})
.catch(error => {
console.error('Error:', error);
});



};
// создать страницу личного кабинета
//render(<SignUp />, document.getElementById("root"));

export {SignIn}