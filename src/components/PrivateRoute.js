import React from 'react';
import {Redirect, Route} from 'react-router-dom'; 
import { ACCESS_TOKEN_NAME } from '../components/constants/apiConstants';

function PrivateRoute({component : Component, ...rest}) {
    return (
        <Route 
            {...rest}
            render={props => localStorage.getItem(ACCESS_TOKEN_NAME) ? (
                    <Component {...props} />
                ):(
                    <Redirect to={{
                        pathname:'/login',
                        state:{ from: props.location }
                    }} />
                )}
        />
    )
}

export default PrivateRoute
