import React from 'react';
import { use } from 'react';
import { AuthContext } from '../pages/Shared/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user } = use(AuthContext);

    if (!user) {
        <Navigate to="/signIn"></Navigate>
    }

    return children;

};

export default PrivateRoute;
const { } = use(AuthContext);




{ children }