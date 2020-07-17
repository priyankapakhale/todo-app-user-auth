import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContextConsumer } from '../context/userContext';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <UserContextConsumer>
            {
                ({isAuthenticated}) => (
                    <Route {...rest} render={props => (
                        isAuthenticated 
                        ? <Component {...props} />
                        : <Redirect to="/login" />
                    )} />
                )
            }
        </UserContextConsumer>
        
    );
};

export default PrivateRoute;