import React from 'react';
import { useGetHelloQuery } from './helloSlice';
import Loading from '../../template/componentTemplate/Loading';

function HelloComponent() {
	const { data, isLoading } = useGetHelloQuery({});
	if (isLoading) return <Loading />;
	return <div>{data && data.result}</div>;
}

export default HelloComponent;
