
// create auth context and export 

import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const AuthContext = createContext();

// create auth provider and show the children of provider
const AuthProvider = (props) => {

    const { children } = props;

    const allContexts = useFirebase();
    return (

        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;