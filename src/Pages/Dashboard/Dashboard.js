import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {

    const [user] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user);
    if (adminLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="drawer drawer-mobile">
        <input id="dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
            <div className='px-5'>
                <h3 className='text-4xl text-center text-purple-500 my-5'>Car Geeks Dashboard</h3>
                <label htmlFor="dashboard" className=" lg:hidden"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></label>
            </div>
            <Outlet></Outlet>
        </div>
        <div className="drawer-side">
            <label htmlFor="dashboard" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                <li><Link to="/dashboard">My Profile</Link></li>
                {!admin && <>
                    <li><Link to="/dashboard/myorders">My Orders</Link></li>
                    <li><Link to="/dashboard/addreview">Add a Review</Link></li>
                </>}
                {admin && <>
                    <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
                    <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                    <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                </>}
            </ul>

        </div>
    </div>
    );
};

export default Dashboard;