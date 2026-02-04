import React from 'react';
import { use } from 'react';
import { AuthContext } from '../pages/Shared/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>
    }

    if (!user) {
        return <Navigate to="/signIn" state={location.pathname}></Navigate>
    }

    return children;

};

export default PrivateRoute;
// const { } = use(AuthContext);




// { children }