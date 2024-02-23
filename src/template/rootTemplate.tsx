import React, { Fragment } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './componentTemplate/Footer';
import Header from './componentTemplate/Header';
import { getToken } from '../lib/localStorage';

const RootTemplate = () => {
	return (
		<Fragment>
			<div className=" flex flex-col min-h-full justify-between">
				<div className="h-[60px]">
					<Header />
				</div>
				<div className="min-h-screen">
					<Outlet />
				</div>
				<Footer />
			</div>
		</Fragment>
	);
};
export default RootTemplate;
