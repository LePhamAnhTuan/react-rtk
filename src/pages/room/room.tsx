import React from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
const Room = () => {
	const token = localStorage.getItem('token');
	const socket = io('http://localhost:8080', {
		extraHeaders: {
			Authorization: `Bearer ${token ? token : ''}`,
		},
	});
	// function onConnect() {
	//     // console.log('data: ', data);
	//     console.log("connect")
	//     setIsConnected(true);

	// }

	// function onDisconnect() {
	//     setIsConnected(false);
	// }

	// function onFooEvent(value: any) {
	//     console.log("on event")
	//     setFooEvents((previous: any) => [...previous, value]);
	// }
	// function onUserJoin({ username }: any) {
	//     console.log('value: ', username);
	//     setUserName(username);
	// }
	// useEffect(() => {

	//     socket.on('connect', onConnect);
	//     socket.on('disconnect', onDisconnect);
	//     socket.on('event', onFooEvent);
	//     socket.on('user-joined', onUserJoin)
	//     return () => {
	//         socket.off('connect', onConnect);
	//         socket.off('disconnect', onDisconnect);
	//         socket.off('event', onFooEvent);
	//         socket.off('user-joined', onUserJoin)

	//     };
	// }, []);
	React.useEffect(() => {
		socket.on('connect', () => {
			console.log(socket.id);
		});
		return () => {
			socket.off('connect');
		};
	}, []);

	let { slug } = useParams();
	return (
		<div className="flex flex-col justify-center items-center">
			<p>Chào mừng tới phòng {slug}</p>
			<div className="chat-title">
				<div className="chat chat-start">
					<div className="chat-image avatar">
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS chat bubble component"
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							/>
						</div>
					</div>
					<div className="chat-header">
						Obi-Wan Kenobi
						<time className="text-xs opacity-50">12:45</time>
					</div>
					<div className="chat-bubble">You were the Chosen One!</div>
					<div className="chat-footer opacity-50">Delivered</div>
				</div>
				<div className="chat chat-end">
					<div className="chat-image avatar">
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS chat bubble component"
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							/>
						</div>
					</div>
					<div className="chat-header">
						Anakin
						<time className="text-xs opacity-50">12:46</time>
					</div>
					<div className="chat-bubble">I hate you!</div>
					<div className="chat-footer opacity-50">Seen at 12:46</div>
				</div>
			</div>
		</div>
	);
};

export default Room;
