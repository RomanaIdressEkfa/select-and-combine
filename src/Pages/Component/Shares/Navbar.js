import React from 'react';
import icon from './../../assets/icons/icon.png';
import img from './../../assets/icons/20200920_225031.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAppleWhole, faShirt, faBriefcase, faBurger } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='mt-2 '>
            <div className="navbar bg-opacity-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><a>Shops</a></li>
                            <li tabindex="0">
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
                        <li tabindex="0">
                            <NavLink to='/'>
                                Grocery
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </NavLink>
                            <ul className="p-0 bg-white shadow p-3">
                                <li><a><FontAwesomeIcon icon={faAppleWhole} />Grocery</a></li>
                                <li><a><FontAwesomeIcon icon={faCoffee} />Makeup</a></li>
                                <li><a><FontAwesomeIcon icon={faBurger} />Bakery</a></li>
                                <li><a><FontAwesomeIcon icon={faBriefcase} />Bags</a></li>
                                <li><a><FontAwesomeIcon icon={faShirt} />Clothing</a></li>
                                <li><a><FontAwesomeIcon icon={faCoffee} />Furniture</a></li>
                                <li><a><FontAwesomeIcon icon={faAppleWhole} />Daily Needs</a></li>
                            </ul>
                        </li>
                        <li><NavLink to='/shops'>Shops</NavLink></li>
                        <li><NavLink to='/offers'>Offers</NavLink></li>
                        <li><NavLink to='/faq'>FAQ</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-accent normal-case">Became a seller</a>
                </div>
                <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <img src={img} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;