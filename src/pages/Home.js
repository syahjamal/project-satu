import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../components/constants/apiConstants';
import axios from 'axios'
function Home(props) {
    useEffect(() => {
        axios.get(API_BASE_URL+'/users/{id}', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }
        })
        .catch(function (error) {
          redirectToLogin()
        });
      })
    function redirectToLogin() {
    props.history.push('/login');
    }
    return(
        <div>
            <Navbar/>
            <div className='home'>
                <h1>Home</h1>
            </div>
        </div>
    )
}

export default withRouter(Home);
