import React from 'react';
import { selectUser } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const IsUserLogin = () => {
	const user = useSelector(selectUser);
	let navigate = useNavigate();
	React.useEffect(() => {
		if (user == null) {
			return navigate('/login');
		} else {
			return navigate('/');
		}
		console.log('user: ', user);
	}, [user]);
	return <></>;
};

export default IsUserLogin;
