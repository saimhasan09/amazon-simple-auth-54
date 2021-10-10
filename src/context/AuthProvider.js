
// create auth context and export 

import React from 'react';
import { createContext } from 'react';


export const AuthContext = createContext();

// create auth provider 
const AuthProvider = (props) => {

    const { children } = props;

    return (
        <AuthProvider.provider>
            {children}
        </AuthProvider.provider>
    );
};

export default AuthProvider;