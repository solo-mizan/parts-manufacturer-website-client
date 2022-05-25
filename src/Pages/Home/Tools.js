import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Tools = () => {
    const { data: tools, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/tools')
        .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }


    console.log(tools);
    if (isLoading) {
        return <Loading />
    }
    
    return (
        <div>

        </div>
    );
};

export default Tools;