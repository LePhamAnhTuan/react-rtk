import React from 'react';

type Props = {
	title?: string;
	content?: string;
	render?: React.ReactNode;
};
const CustomModalComfirm = ({
	title = 'Hello!',
	content = 'Press ESC key or click outside to close',
	render,
}: Props) => {
	return (
		<dialog id="my_modal_2" className="modal">
			<div className="modal-box">
				<h3 className="font-bold text-lg">{title}</h3>
				<p className="py-4">{content}</p>
				{render && <div className="py-4">{render}</div>}
				<div className="flex justify-end items-end gap-2">
					<button
						className="btn btn-warning"
						onClick={() => {
							if (document) {
								(
									document.getElementById(
										'my_modal_2',
									) as HTMLFormElement
								).close();
							}
						}}
					>
						Đóng
					</button>

					<button
						className="btn btn-success"
						onClick={() => {
							if (document) {
								(
									document.getElementById(
										'my_modal_2',
									) as HTMLFormElement
								).close();
							}
						}}
					>
						Đăng xuất
					</button>
				</div>
			</div>
			<form method="dialog" className="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>
	);
};

export default CustomModalComfirm;
