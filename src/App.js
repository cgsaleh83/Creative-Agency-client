import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddReviews from './components/Review/AddReviews/AddReviews';
import Order from './components/Orders/Order/Order';
import Login from './components/Login/Login/Login';
import Works from './components/Home/Works/Works';
import AddServices from './components/Services/AddServices/AddServices';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import Home from './components/Home/Home/Home';
import AllOrders from './components/Orders/AllOrders/AllOrders';
import OrderList from './components/Orders/OrderList/OrderList';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/allOrders">
            <AllOrders />
          </PrivateRoute>

          <Route path="/review">
            <AddReviews></AddReviews>
          </Route>

          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>

          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/work">
            <Works></Works>
          </Route>

          <Route path="/AddService">
            <AddServices></AddServices>
          </Route>

          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>

          <PrivateRoute path="/sidebar">
            <Sidebar></Sidebar>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
