import React from 'react';
import { use } from 'react';
import { AuthContext } from '../pages/Shared/AuthContext';

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo
};

export default useAuth;