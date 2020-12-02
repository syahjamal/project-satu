import React,{useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import LoginForm from './components/LoginForm/LoginForm';
// import axios from "axios";


function App () {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  return(
    <>
    <Router>
    <Route path="/login" component={LoginForm}/>
        {/* <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
    </Route> */}
   
    </Router>
    <Router>
   
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/reports' component={Reports}/>
      <Route path='/products' component={Products}/>
     
    </Switch>
    </Router>
    
    </>
  );
}


export default App;
