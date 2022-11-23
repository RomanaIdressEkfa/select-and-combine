import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../../firebase_init';
import Loading from '../Shares/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return (
            <div className='text-center mx-auto'>
                <Loading></Loading>
            </div>
        );
    }
    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace />

    }

};



export default RequireAuth;