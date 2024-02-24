import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../lib/localStorage';
const IsUserLogin = () => {
	const user = getToken();
	let navigate = useNavigate();
	React.useEffect(() => {
		if (user == null) {
			return navigate('/login');
		} else {
			return navigate('/');
		}
	}, [user]);
	return <></>;
};

export default IsUserLogin;
