import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import Home from './components/Home/Home/Home';
import Works from './components/Home/Works/Works';
import Order from './components/ClientSite/Order/Order';
import OrderList from './components/ClientSite/OrderList/OrderList';
import AddServices from './components/AddServices/AddServices';
import AddReviews from './components/AddReviews/AddReviews';
import AllOrders from './components/AllOrders/AllOrders/AllOrders';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';


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
