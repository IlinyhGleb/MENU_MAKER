import React from "react";
import { Form, Field} from "react-final-form";
import {Link} from "react-router-dom";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const SignUp= () => {

return(
 
<><div className="section header"><div> Форма регистрации</div></div>
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.surname) {
          errors.surname = "*";
        }
        if (!values.username) {
          errors.username = "*";
        }
        if (!values.login) {
          errors.login = "*";
        }
        if (!values.password) {
          errors.password = "*";
        }
        if (!values.confirm) {
          errors.confirm = "*";
        } else if (values.confirm !== values.password) {
          errors.confirm = "Пароли не совпадают";
        }
        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="surname">
            {({ input, meta }) => (
              <div>
                
                <input {...input} type="text" placeholder="Фамилия" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="username">
            {({ input, meta }) => (
              <div>
                
                <input {...input} type="text" placeholder="Имя" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
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
          <Field name="confirm">
            {({ input, meta }) => (
              <div>
                
                <input {...input} type="password" placeholder="Подтвердите пароль" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Зарегистрироваться
            </button>
            
          </div>
         <div className="links">
            <h1>Уже есть аккаунт? </h1>
          <Link to="/authorization" className="auth_link"> Войти.</Link>
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
    "name": values.username,
    "surname": values.surname
   
};
const response= await fetch('/users/add', {
  method: 'POST',
  // We convert the React state to JSON and send it as the POST body
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  }


}).then(response => {
if (response.ok) {
  alert("Вы успешно зарегистрировались!");
 
  window.top.location.reload();
  //window.location.replace("/main");

} else {
  alert("Пользователь с таким логином уже существует. Пожалуйста, выберите новый логин.");
  values.login=""

}
})
.catch(error => {
console.error('Error:', error);
});



};
// создать страницу личного кабинета
//render(<SignUp />, document.getElementById("root"));

export {SignUp}