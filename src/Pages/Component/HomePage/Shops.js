import React from 'react';
import { NavLink } from 'react-router-dom';

const Shops = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><a>Profile</a></li>
                        <li><NavLink to='/grocery'>Dashboard</NavLink></li>
                        <li><a>Admin Panel</a></li>
                        <li><a>Add Item</a></li>
                        <li><a>Contact</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Shops;