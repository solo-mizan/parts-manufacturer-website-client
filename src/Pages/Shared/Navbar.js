import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo SVG.svg';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <Link to={'/home'}><img src={Logo} className="w-16" alt="" /></Link>
            </div>
            <div>

                <Link className='m-3' to={'/blog'}>Blogs</Link>
                {
                    user ? <Link className='m-3' to={'/dashboard'}>Dashboard</Link>
                        :
                        <Link className='m-3' to={'/login'}>Login</Link>
                }
                {
                    user ? <Link className='m-3' to={'/portfolio'}>{user.displayName}</Link>
                        :
                        <Link className='m-3' to={'/register'}>Register</Link>
                }

            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user?.photoURL ? <img src={user?.photoURL} alt="" />
                                    :
                                    <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                            }
                        </div>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">Add new</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li>{user ? <button onClick={logout} className='btn btn-ghost btn-sm'>Log Out</button> : <Link className='btn btn-ghost btn-sm' to={'/login'}>Login</Link>}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;