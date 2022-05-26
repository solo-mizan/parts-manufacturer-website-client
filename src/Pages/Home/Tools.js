import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/tools')
        .then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-6xl text-center font-bold m-8 '>Car Parts Wholesale</h1>
            <div className='grid lg:grid-cols-3'>
                {
                    tools?.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;