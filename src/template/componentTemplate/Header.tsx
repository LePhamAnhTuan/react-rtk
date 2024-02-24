import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
	const navgiate = useNavigate();
	// const [updateLogin, { isLoading, data }] = useUpdateLoginMutation({
	// 	fixedCacheKey: 'shared-update-login',
	// });
	return (
		<>
			<Button>
				<Link to={'/sp-ezy'}>ezy hợp đồng vận chuyển</Link>
			</Button>
		</>
	);
};

export default Header;
