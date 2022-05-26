import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const { data: tools, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/tools')
        .then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            {
                tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
            }
        </div>
    );
};

export default Tools;