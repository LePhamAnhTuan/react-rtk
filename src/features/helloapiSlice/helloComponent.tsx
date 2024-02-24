import Loading from '../../template/componentTemplate/Loading';
import { useGetHelloQuery } from './helloSlice';

function HelloComponent() {
	const { data, isLoading } = useGetHelloQuery({});
	if (isLoading) return <Loading />;
	return <div>{data && data.result}</div>;
}

export default HelloComponent;
