import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomLoadingRedirect = () => {
	const [count, setCount] = React.useState(5);
	const navigate = useNavigate();
	React.useEffect(() => {
		const interval = setInterval(() => {
			setCount((count) => count - 1);
		}, 1000);

		count === 0 && navigate('/login');

		return () => clearInterval(interval);
	}, [count, navigate]);
	return (
		<div className="flex justify-center h-screen">
			<div className="spin"></div>
			<p>Chuyển đến trang đăng nhập{count}</p>
		</div>
	);
};

export default CustomLoadingRedirect;
