import React from 'react';
import { Redirect } from 'react-router-dom';
import { UserContextConsumer } from '../context/userContext';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <UserContextConsumer>
            {
                ({isAuthenticated}) => (
                    isAuthenticated && restricted ? <Redirect to="/" /> 
                    : <Component />
                )
            }
        </UserContextConsumer>
    )  
};

export default PublicRoute;