import { Navigate, Outlet, Route } from "react-router-dom";


const PrivateRoute = (props) => {

  console.log(localStorage.getItem('login'))
  if (localStorage.getItem('login')!='') {
     return <Outlet/>
  } else {
    return <Navigate to="/" />;
  }
};
let observer = new MutationObserver(localStorage => {
  PrivateRoute();
});


export {PrivateRoute};