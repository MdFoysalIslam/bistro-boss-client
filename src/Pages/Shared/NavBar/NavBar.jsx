// @flow strict

import * as React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contextProvider/AuthProvider';
import { FaCartShopping } from "react-icons/fa6";
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';

function NavBar() {
    const { user, logOut } = React.useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <div className='text-yellow-600'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/menu'>Our Menu</Link></li>
           {
            user && isAdmin &&  <li><Link to='/dashboard/adminHome'>Secrit</Link></li>
           }
           {
            user && !isAdmin &&  <li><Link to='/dashboard/UserHome'>Secrit</Link></li>
           }

            <li><Link>About</Link></li>
            <li><Link to="/order/dessert">Your Order</Link></li>
            <li>
                <Link to='/dashboard/cart'>
                    <button className="btn">
                        <FaCartShopping />
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                </Link>
            </li>
            {
                user ? <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button>
                </> : <> <li><Link to='/login'>Login</Link></li></>
            }
        </div>

    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-20 max-w-screen-xl mx-auto bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to='/menu'>Our Menu</Link></li>
                            <li>
                                <a>Home</a>
                                <ul className="p-2">
                                    {navOptions}
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">THE FITNESS MEALS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/menu'>Our Menu</Link></li>
                        <li>
                            <details>
                                <summary>Home</summary>
                                <ul className="p-2">
                                    {navOptions}
                                </ul>
                            </details>
                        </li>
                        <li><Link to='about'>About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                {
                user ? <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button>
                </> : <> <li><Link to='/login'>Login</Link></li></>
            }
                </div>
            </div>
        </div>
    );
};

export default NavBar;