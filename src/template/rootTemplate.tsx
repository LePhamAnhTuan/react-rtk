import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './componentTemplate/Footer';
import Header from './componentTemplate/Header';
const RootTemplate = () => {
	return (
		<Fragment>
			<div className=" flex flex-col min-h-full justify-between">
				<div className="h-[60px]">
					<Header />
				</div>
				<div className="min-h-screen py-4 px-8">
					<Outlet />
				</div>
				<Footer />
			</div>
		</Fragment>
	);
};
export default RootTemplate;
