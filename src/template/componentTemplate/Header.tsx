import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
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
