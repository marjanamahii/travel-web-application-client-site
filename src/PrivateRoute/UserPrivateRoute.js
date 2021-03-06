import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import CircularLoader from '../customComponent/circularLoader/CircularLoader';
import { FirebaseContext } from '../context/FirebaseProvider';

const UserPrivateRoute = ({ children }) => {

    const { user, isLoading } = useContext(FirebaseContext);
    const location = useLocation();

    if (isLoading) {
        return <CircularLoader />
    }

    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
};

export default UserPrivateRoute;