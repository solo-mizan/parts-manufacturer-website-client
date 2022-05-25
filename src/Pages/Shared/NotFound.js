import React from 'react';
import Error from '../../Assets/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='fluid' src={Error} alt="Error" />
        </div>
    );
};

export default NotFound;