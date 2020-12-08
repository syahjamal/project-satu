import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../components/constants/apiConstants';
import axios from 'axios'
import CRUDTable, { Fields, Field, Pagination } from "react-crud-table";
import './Home.css';
import Table from './Table'
// function Home(props) {
//     useEffect(() => {
//         axios.get(API_BASE_URL+'/users/{id}', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
//         .then(function (response) {
//             if(response.status !== 200){
//               redirectToLogin()
//             }
//         })
//         .catch(function (error) {
//           redirectToLogin()
//         });
//       })
//     function redirectToLogin() {
//     props.history.push('/login');
//     }
        function Home(){
            return(
                <div>
                    <Navbar/>
                    <Table />
                </div> 
                   
            )
        }

export default withRouter(Home);
