import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/App.css';
import Login from './features/auth';
import HelloComponent from './features/helloapiSlice/helloComponent';
import Room from './pages/room/room';
import SpEzy from './pages/sp-ezy/SpEzy';
import NotFound from './template/componentTemplate/notFound';
import RootTemplate from './template/rootTemplate';
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootTemplate />}>
					<Route index path="/login" element={<Login />} />
					<Route path="room/:slug" element={<Room />} />
					<Route path="hello" element={<HelloComponent />} />
				</Route>

				<Route path="/sp-ezy" element={<SpEzy />} />
				{/* notFound router */}
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
