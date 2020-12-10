import Axios from 'axios';
import React from 'react';
import * as FaIcons from "react-icons/fa";
import axios from 'axios';

function Logout(props) {
    const redirectToLogin =()=> {
        localStorage.clear();
        axios.get('http://localhost:8080/login').then(res=>{
            props.history.push('/login');
        })
    }
    return (
        <div>
            <FaIcons.FaSignOutAlt onClick={()=>redirectToLogin()} />
        </div>
    )
}

export default Logout
