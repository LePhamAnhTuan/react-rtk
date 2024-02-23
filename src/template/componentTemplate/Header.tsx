import React from 'react';
import logo from '../../assets/image/LOGObuzz.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useUpdateLoginMutation } from '../../features/auth/authSlice';
import CustomModalComfirm from '../../components/CustomModalComfirm';

const Header = () => {
	const navgiate = useNavigate();
	const [updateLogin, { isLoading, data }] = useUpdateLoginMutation({
		fixedCacheKey: 'shared-update-login',
	});
	return (
		<>
			<div className="glass fixed h-[60px] w-full">
				<div className="navbar bg-base-100">
					<div className="flex-none">
						<div className="drawer">
							<input
								id="my-drawer"
								type="checkbox"
								className="drawer-toggle"
							/>
							<div className="drawer-content">
								{/* Page content here */}
								<label
									className="btn-circle swap swap-rotate "
									htmlFor="my-drawer"
								>
									<svg
										className="swap-off fill-current"
										xmlns="http://www.w3.org/2000/svg"
										width="22"
										height="22"
										viewBox="0 0 512 512"
									>
										<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
									</svg>
								</label>
							</div>
							<div className="drawer-side">
								<label
									htmlFor="my-drawer"
									aria-label="close sidebar"
									className="drawer-overlay"
								></label>
								<ul className="menu p-4 w-80 min-h-full bg-blue-200 text-base-content ">
									{/* Sidebar content here */}
									<li>
										<Link to="/room/vn-room">
											Sidebar Item 1
										</Link>
									</li>
									<li>
										<Link to="/room/2">Sidebar Item 1</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex-1">
						<Link to={'/'} className="btn btn-ghost text-xl">
							Buzz
						</Link>
					</div>
					<div className="flex-none">
						<div className="flex justify-end flex-1 px-2">
							<div className="flex items-stretch">
								<div className="dropdown dropdown-end">
									<div
										tabIndex={0}
										role="button"
										className="btn btn-ghost rounded-btn"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											className="inline-block w-5 h-5 stroke-current"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
											></path>
										</svg>
									</div>
									<ul
										tabIndex={0}
										className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-0"
									>
										{data?.user ? (
											<>
												<p>
													Chào mừng {data?.user.email}
												</p>
												<li className="hover:bg-slate-600 hover:rounded-lg transition-all hover:transition-all">
													<a>Thông tin</a>
												</li>
												<li className="hover:bg-slate-600 hover:rounded-lg transition-all hover:transition-all">
													<button
														// onClick={
														// 	handleOpenModal
														// }

														onClick={() => {
															if (document) {
																(
																	document.getElementById(
																		'my_modal_2',
																	) as HTMLFormElement
																).showModal();
															}
														}}
													>
														Đăng xuất
													</button>
												</li>
											</>
										) : (
											<>
												<li className="hover:bg-slate-600 hover:rounded-lg transition-all hover:transition-all">
													<Link to={'/login'}>
														Đăng nhập
													</Link>
												</li>
												<li className="hover:bg-slate-600 hover:rounded-lg transition-all hover:transition-all">
													<Link to={'/register'}>
														Đăng kí
													</Link>
												</li>
											</>
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<CustomModalComfirm />
		</>
	);
};

export default Header;
