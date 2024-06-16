
import {Routes, Route, Link} from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';


import Home from "./pages/Home";
import {FormRegistration} from "./pages/FormRegistration";
import {FormAuthorization} from "./pages/FormAuthorization";
import MainPage from "./pages/MainPage";
import { Account } from './pages/Account';
import { PersonalParams } from './pages/PersonalParams'
import { AddFridge } from './pages/AddFridge'
import { FridgeChoise } from './pages/FridgeChoise';

function App() {
  return (
    <>
       
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/registration" element={<FormRegistration/>}/>
      <Route path="/authorization" element={<FormAuthorization/>}/>
      <Route element={<PrivateRoute />}>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/add_fridge" element={<AddFridge/>} />
        <Route path="/personal"element={<PersonalParams/>}/>
        <Route path="/choose" element={<FridgeChoise/>} />
      </Route> 
   </Routes>
    </>
  
  );
}

export default App;

