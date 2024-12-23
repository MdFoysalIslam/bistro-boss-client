// @flow strict

import * as React from 'react';
import { FaAd, FaBars, FaBook, FaCalendar, FaHome, FaList, FaListAlt, FaShoppingCart, FaStar, FaUser, FaUsers, FaUtensils, FaUtensilSpoon } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import { IoIosContacts } from 'react-icons/io';
import useAdmin from '../Hooks/useAdmin';

function Dashboard() {
    const [cart] = useCart();

    //TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className='flex'>
            {/**Dashboard side bar*/}
            <div className="w-64 min-h-screen bg-accent">
                <ul className='menu'>

                    {
                        isAdmin ? <>
                        <li>
                        <NavLink to='/dashboard/adminHome'> <FaHome />Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItem'> <FaUtensils />Add Item</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItems'> <FaListAlt />Manage Item</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'> <FaBook/>Manage Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/users'> <FaUsers/>All Users</NavLink>
                    </li>
                    <div className="divider"></div>
                        <li>
                            <NavLink to='/'> <FaHome />Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/menu'> <FaBars />Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to='/order/contact'> <IoIosContacts />Contact</NavLink>
                        </li> </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome'> <FaHome />User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reservation'> <FaCalendar />Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'> <FaShoppingCart />My Cart  ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'> <FaStar />Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/booking'> <FaList />My Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'> <FaList />paymentHistory</NavLink>
                                </li>
                                <div className="divider"></div>
                                <li>
                                    <NavLink to='/'> <FaHome />Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/menu'> <FaBars />Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/order/contact'> <IoIosContacts />Contact</NavLink>
                                </li>
                            </>
                    }

                </ul>
            </div>

            {/*** dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
