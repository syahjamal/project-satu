import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../components/constants/apiConstants';
import axios from 'axios'
import './Home.css';
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
                    <div className='table'>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                        </tbody>
                  </div>   
                  </div>
            )
        }

export default withRouter(Home);
