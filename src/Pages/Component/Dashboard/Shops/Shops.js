import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Dashboard from '../Dashboard';

const Shops = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center -mt-32">

                    <Outlet></Outlet>
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">

                    </label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><NavLink to='profile'>Profile</NavLink></li>
                        <li><NavLink to='dashboard'>Dashboard</NavLink></li>
                        <li><NavLink to='adminPanel'>Admin Panel</NavLink></li>
                        <li><a>Add Item</a></li>
                        <li><a>Login</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Shops;