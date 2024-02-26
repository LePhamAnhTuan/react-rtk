import { Id, toast } from 'react-toastify';
import { JSX } from 'react/jsx-runtime';

export const Msg = ({ title, text }: { title: string; text: string }) => {
	return (
		<div className="msg-container">
			<p className="msg-title font-bold text-black">{title}</p>
			<p className="msg-description">{text}</p>
		</div>
	);
};

export const toaster = (
	myProps: JSX.IntrinsicAttributes & { title: string; text: string },
	toastProps: any,
): Id => toast(<Msg {...myProps} />, { ...toastProps });

toaster.success = (
	myProps: JSX.IntrinsicAttributes & { title: string; text: string },
	toastProps?: any,
): Id => toast.success(<Msg {...myProps} />, { ...toastProps });

toaster.warn = (
	myProps: JSX.IntrinsicAttributes & { title: string; text: string },
	toastProps?: any,
) => toast.warn(<Msg {...myProps} />, { ...toastProps });

toaster.error = (
	myProps: JSX.IntrinsicAttributes & { title: string; text: string },
	toastProps?: any,
) => toast.warn(<Msg {...myProps} />, { ...toastProps });

// ...the other notification types

// use it
// toaster.success(
// 	{
// 		title: 'You did it!',
// 		text: 'Good job!',
// 	},
// 	{ autoClose: false },
// );
