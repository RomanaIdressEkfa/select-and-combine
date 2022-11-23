import React from 'react';
import icon from './../../assets/icons/icon.png';
import img from './../../assets/icons/20200920_225031.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAppleWhole, faShirt, faBriefcase, faBurger } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import app from "../../../firebase_init";
// import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(app);

const Navbar = () => {
    // const [user]=use
    // // const { displayName } = users;
    const [user, setUser] = useState({})
    const signOutButton = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out')
                setUser({});
            }).catch((error) => {
                // An error happened.
            });
    }
    return (
        <div className='mt-2 '>
            <div className="navbar bg-opacity-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><a>Shops</a></li>
                            <li tabIndex="0">
                                <a className="justify-between">
                                    <button className="btn glass">Grocery</button>
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Grocery</a></li>
                                    <li><a>Makeup</a></li>
                                    <li><a>Bakery</a></li>
                                    <li><a>Bags</a></li>
                                    <li><a>Clothing</a></li>
                                    <li><a>Furniture</a></li>
                                    <li><a>Daily Needs</a></li>
                                </ul>
                            </li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl w-64">
                        <img src={icon} alt="" />
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li tabIndex="0">
                            <NavLink to='/'>
                                Grocery
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </NavLink>
                            {/* <ul className="p-0 bg-white shadow p-3">
                                <li><a><FontAwesomeIcon icon={faAppleWhole} />Grocery</a></li>
                                <li><a><FontAwesomeIcon icon={faCoffee} />Makeup</a></li>
                                <li><a><FontAwesomeIcon icon={faBurger} />Bakery</a></li>
                                <li><a><FontAwesomeIcon icon={faBriefcase} />Bags</a></li>
                                <li><a><FontAwesomeIcon icon={faShirt} />Clothing</a></li>
                                <li><a><FontAwesomeIcon icon={faCoffee} />Furniture</a></li>
                                <li><a><FontAwesomeIcon icon={faAppleWhole} />Daily Needs</a></li>
                            </ul> */}
                        </li>

                        {/* <li><NavLink to='/offers'>Offers</NavLink></li> */}
                        {
                            user && <li><NavLink to='/shops'>Shops</NavLink></li>
                        }
                        {
                            user.gmail ?
                                <li><NavLink onClick={signOutButton}>Logout</NavLink></li> :
                                <li><NavLink to='login'>Login</NavLink></li>
                        }


                    </ul>
                </div>
                <div class="flex-none">
                    <div class="dropdown dropdown-end">
                        <label tabIndex="0" class="btn btn-ghost btn-circle">
                            <div class="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span class="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div class="card-body">
                                <span class="font-bold text-lg">8 Items</span>
                                <span class="text-info">Subtotal: $999</span>
                                <div class="card-actions">
                                    <button class="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown dropdown-end">
                        <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                {/* <img src={users.photoURL} /> */}
                                <img src={img} alt="" />
                            </div>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            {/* {
                                user
                            } */}
                            <li><a>Login</a></li>
                            <li><a onClick={signOutButton}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;