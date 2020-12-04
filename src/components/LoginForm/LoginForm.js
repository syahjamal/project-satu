import React, {useState} from 'react';
import axios from 'axios';
import './LoginForm.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../constants/apiConstants';
import { withRouter } from "react-router-dom";
import background from '../../images/member_celerates.jpg';

function LoginForm(props) {
    const api = axios.create({
        baseURL:'http://localhost:8080',
        headers: {"Access-Control-Allow-Origin": "*", 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },

    })

    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post(api+'/login', payload)
        .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    redirectToHome();
                    props.showError(null)
                }
                else if(response.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            // .catch(function (error) {
            //     console.log(error);
            // });
          
    }

    const redirectToHome = () => {
        // props.updateTitle('Home')
        props.history.push('/');
    }
    const redirectToRegister = () => {
        props.history.push('/register'); 
        // props.updateTitle('Register');
    }
    return(
        <div className='container-login'>
        <div className='col-12 col-lg-8'><img src={background} alt="" /></div>
        <div className=" card col-12 col-lg-4 login-card d-flex justify-content-reverse align-items-center">
            <h1>Login</h1>
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1"></label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1"></label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-warning"
                    onClick={handleSubmitClick}
                >Login</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText text-warning" onClick={() => redirectToRegister()}>Register</span> 
            </div>
        </div>
        </div>
    )
}

export default withRouter(LoginForm);