import logo from '@/assets/image/LOGObuzz.svg';
import { Button } from '@/components/ui/button';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
const Header = () => {
	// const [updateLogin, { isLoading, data }] = useUpdateLoginMutation({
	// 	fixedCacheKey: 'shared-update-login',
	// });
	return (
		<div className="flex items-center justify-between py-2 px-4">
			<div>
				<Link to={'/'}>
					<img src={logo} alt="logo" width={50} loading="lazy" />
				</Link>
			</div>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink
							className={navigationMenuTriggerStyle()}
							href="/dashboard"
						>
							Trang chủ
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							className={navigationMenuTriggerStyle()}
							href="/us"
						>
							Giới thiệu
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							className={navigationMenuTriggerStyle()}
							href="/about"
						>
							Liên hệ
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
				<Link to={'/login'}>
					<Button>Đăng nhập</Button>
				</Link>
			</NavigationMenu>
		</div>
	);
};

// const ListItem = React.forwardRef<
// 	React.ElementRef<'a'>,
// 	React.ComponentPropsWithoutRef<'a'>
// >(({ className, title, children, ...props }, ref) => {
// 	return (
// 		<li>
// 			<NavigationMenuLink asChild>
// 				<a
// 					ref={ref}
// 					className={cn(
// 						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
// 						className,
// 					)}
// 					{...props}
// 				>
// 					<div className="text-sm font-medium leading-none">
// 						{title}
// 					</div>
// 					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
// 						{children}
// 					</p>
// 				</a>
// 			</NavigationMenuLink>
// 		</li>
// 	);
// });
// ListItem.displayName = 'ListItem';

export default Header;
