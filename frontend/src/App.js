import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; //useState: Хук React, используемый для управления состоянием компонента.

/*
Создание компонента: Код определяет функциональный компонент с именем App.
Управление состоянием:
Хук useState используется для управления состоянием компонента. Определены два состояния:
values: Объект, содержащий три свойства (val1, val2 и val3), которые хранят введенные пользователем значения.
totalSum: Строка, в которой хранится вычисленная сумма, полученная от бэкенда API.
Обработчики событий:
handleChange: Эта функция вызывается каждый раз, когда пользователь вводит значение в любое из полей ввода. Она обновляет соответствующее значение в состоянии values.
handleSubmit: Эта функция вызывается, когда пользователь отправляет форму. Она отправляет POST-запрос к API на бэкенде, передавая в него значения, введенные пользователем (values: Object.values(values)). Если запрос успешен, ответ API содержит вычисленную сумму, которая затем сохраняется в состоянии totalSum. Если при запросе возникла ошибка, она обрабатывается в блоке catch, и состояние totalSum устанавливается на «Произошла ошибка».
Отображаемые элементы: Оператор return внутри компонента определяет JSX-элементы, которые будут отображаться на экране:
Контейнер <div> с классом container.
Элемент <h1> с заголовком «Калькулятор суммы».
Форма <form> с тремя полями ввода, каждое из которых представляет одно из значений (val1, val2 и val3). При вводе пользователем значения в любое поле вызывается функция handleChange, чтобы обновить состояние values.
Кнопка «Рассчитать сумму» для отправки формы. При нажатии вызывается функция handleSubmit.
Элемент <div>, отображающий вычисленную сумму (totalSum).
Интеграция с API:
При отправке формы (вызов функции handleSubmit) приложение отправляет POST-запрос на бэкенд API по адресу 'http://31.129.97.53:5000/calculate_sum'.
В запросе передаются значения, введенные пользователем (values: Object.values(values)).
Если запрос выполнен успешно, данные ответа содержат вычисленную сумму, которая затем сохраняется в состоянии totalSum.
Если при выполнении запроса возникла ошибка, ошибка обрабатывается в блоке catch, и состояние totalSum устанавливается на «Произошла ошибка».*/

function App() {
  const [inputValue, setInputValue] = useState('2000');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (event) => {
    // Действие, которое вы хотите выполнить при нажатии на кнопку
    console.log('Вы f1f313ввели:', inputValue);
  };

  // async addToCart() {
  //     // POST request using fetch with async/await
  //     const requestOptions = {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ food_energy_goal: 2000 })
  //     };
  //     const response = await fetch('http://localhost:5000/optim', requestOptions);
  //     const data = await response.json();
  //     this.setState({ postId: data.id });
  // }

  const addToCart = (event) => {
    //'use server'
    //const productId = formData.get('input')
    console.log('Вы вв321312ели:')//, productId);
    // event.preventDefault();
    // alert(`Name:`);

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "food_energy_goal": 2000 })
    };
    fetch('http://localhost:5000/optim', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
        //.then(data => this.setState({ postId: data.id }));
    console.log('fads:')//, productId);

    //{"food_energy_goal": 2000}' http://localhost:5000/optim
  }
  /*async function addToCart(formData) {
    'use server'
    const productId = formData.get('productId')
    await updateCart(productId)
  }*/
      //<div className="center">
        //<label htmlFor="inputField" className="label">FoodMaker</label>
        //<input id="inputField" type="text" className="input" value={inputValue} onChange={handleInputChange}/>
       // <button className="button" onClick={handleButtonClick}>Официант, меню!</button>
  return (
    <div className="App">
      <header className="App-header">
        <h1>FoodMaker</h1>
      </header>

      <form onSubmit={addToCart}>
        <input type="inputField" name="input" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Официант, меню!</button>
      </form>
    </div>
  );
}

export default App;
