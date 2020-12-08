import React,{useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import PrivateRoute from './components/PrivateRoute';

// import axios from "axios";


function App () {


  return(
    <>
    <Router>

        {/* <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
    </Route> */}

    
    <Switch>
      
      <Route path='/' exact component={Home}/>
      <Route path='/reports' component={Reports}/>
      <Route path='/products' component={Products}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/register" component={RegistrationForm}/>

    </Switch>
    </Router>
    
    </>
  );
}


export default App;
