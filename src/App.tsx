import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/privateRoute/privateRoute';
import Login from './features/auth';
import HelloComponent from './features/helloapiSlice/helloComponent';
import Room from './pages/room/room';
import NotFound from './template/componentTemplate/notFound';
import RootTemplate from './template/rootTemplate';
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootTemplate />}>
					{/* <Route index element={<IsUserLogin />}></Route> */}
					<Route path="/login" element={<Login />} />
					<Route path="room/:slug" element={<Room />} />
					<Route
						path="hello"
						element={
							<PrivateRoute>
								<HelloComponent />
							</PrivateRoute>
						}
					/>
				</Route>

				{/* notFound router */}
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
