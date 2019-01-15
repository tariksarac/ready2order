import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";
import {AuthConsumer} from "../../AuthProvider/AuthProvider";

const LoginRoute = ({ component: Component, ...rest }) => (
    <AuthConsumer>
        {({ isAuth }) => (
            <Route
                render={
                    props =>
                        !isAuth
                            ? <Component {...props} />
                            : <Redirect to="/" />
                }
                {...rest}
            />
        )}
    </AuthConsumer>
)
LoginRoute.propTypes = {
    component: PropTypes.func
};

export default LoginRoute;
