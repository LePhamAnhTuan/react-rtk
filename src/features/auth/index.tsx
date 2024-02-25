// Import hook để sử dụng

import React from 'react';
import { User, useUpdateLoginMutation } from './authSlice';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/image/LOGObuzz.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'react-toastify';

const formSchema = z.object({
	email: z
		.string()
		.min(1, {
			message: 'Email không được rỗng',
		})
		.email({ message: 'Vui lòng nhập đúng email' }),
	password: z.string().min(6, {
		message: 'Nhập ít nhất 6 kí tự',
	}),
});
export default function CustomLogin() {
	const user = localStorage.getItem('token');
	const navigate = useNavigate();
	React.useEffect(() => {
		if (user != null) {
			return navigate('/');
		}
	}, []);
	const [updateLogin, { isLoading, data }] = useUpdateLoginMutation({
		fixedCacheKey: 'shared-update-login',
	});
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
		try {
			updateLogin(values);
			if (data?.user) {
				toast.success(`Chèo mừng ${data?.user?.name}!`);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="w-1/2">
				<img src={logo} alt="logo" width={'100%'} />
			</div>
			<div className="w-1/2">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="your email"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Mật khẩu</FormLabel>
									<FormControl>
										<Input
											type="password"
											className=""
											placeholder="Nhập mật khẩu"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" disabled={isLoading}>
							Đăng nhập
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
}
