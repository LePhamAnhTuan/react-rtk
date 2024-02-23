// Import hook để sử dụng

import React from 'react';
import { User, useUpdateLoginMutation } from './authSlice';
import { useNavigate } from 'react-router-dom';

export default function CustomLogin() {
	const user = localStorage.getItem('token');
	const navigate = useNavigate();
	React.useEffect(() => {
		console.log('user: ', user);
		if (user != null) {
			return navigate('/');
		}
	}, []);
	const [dataLogin, setDataLogin] = React.useState<User>({
		email: null,
		password: null,
	});
	const [updateLogin, { isLoading, data }] = useUpdateLoginMutation({
		fixedCacheKey: 'shared-update-login',
	});
	console.log('data: ', data);
	const handleUpdateLogin = () => {
		updateLogin(dataLogin);
	};
	return (
		<div>
			<form>
				<input
					type="email"
					placeholder="Email"
					onChange={(e) =>
						setDataLogin({ ...dataLogin, email: e.target.value })
					}
				/>
				<input
					type="password"
					placeholder="password"
					onChange={(e) =>
						setDataLogin({ ...dataLogin, password: e.target.value })
					}
				/>

				{/* Gọi login method lấy từ hook useLoginMutation() ở trên */}
				{/* Có thể sử dụng biến isLoading để hiển thị trạng thái loading thay cho state */}
				<button
					type="button"
					className={`${isLoading ? 'loading' : ''}`}
					onClick={handleUpdateLogin}
					disabled={isLoading}
				>
					Login
				</button>
			</form>
			{data && <div>{data?.user.id}</div>}
		</div>
	);
}
