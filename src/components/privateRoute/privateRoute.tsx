import React from 'react';
import { getToken } from '../../lib/localStorage';
import { useNavigate } from 'react-router-dom';
import CustomLoadingRedirect from './CustomLoadingRedirect';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
	const user = getToken();
	const navigate = useNavigate();
	return user ? children : <CustomLoadingRedirect />;
};

export default PrivateRoute;
