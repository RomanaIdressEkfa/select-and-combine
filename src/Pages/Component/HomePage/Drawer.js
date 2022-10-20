import React from 'react';
import Datas from './Datas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAppleWhole, faShirt, faPancakes, faBurger, faChampagneGlasses, faPizzaSlice, faAirFreshener, faArrowUpLong, faAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
const Drawer = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label for="my-drawer-2" className=""><Datas></Datas></label>

                </div>
                <div className="drawer-side shadow-lg">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 bg-base-100 text-base-content">
                        {/* Menubar */}
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0">

                                <li tabindex="0">
                                    <a> <FontAwesomeIcon icon={faAppleWhole} />
                                        Fruits and vegetables
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    {/* <ul className="p-2 bg-base-100">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul> */}
                                </li>

                            </ul>
                        </div>
                        {/* //end// */}
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0">

                                <li tabindex="0">
                                    <NavLink to='/fishMeats'> <FontAwesomeIcon icon={faBurger} />
                                        Fish & Meat
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </NavLink>
                                    {/* <ul className="p-2 bg-base-100">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul> */}
                                </li>

                            </ul>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0">

                                <li tabindex="0">
                                    <a><FontAwesomeIcon icon={faChampagneGlasses} />
                                        Snacks
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    {/* <ul className="p-2 bg-base-100">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul> */}
                                </li>

                            </ul>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0">

                                <li tabindex="0">
                                    <a><FontAwesomeIcon icon={faShirt} />
                                        Pet Care
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    {/* <ul className="p-2 bg-base-100">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul> */}
                                </li>

                            </ul>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0">

                                <li tabindex="0">
                                    <a><FontAwesomeIcon icon={faAirFreshener} />
                                        Home & Cleaning
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    {/* <ul className="p-2 bg-base-100">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul> */}
                                </li>

                            </ul>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0">

                                <li tabindex="0">
                                    <a><FontAwesomeIcon icon={faBurger} />
                                        Dairy
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    {/* <ul className="p-2 bg-base-100">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul> */}
                                </li>

                            </ul>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0">

                                <li tabindex="0">
                                    <a><FontAwesomeIcon icon={faAppleWhole} />
                                        Cooking
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    {/* <ul className="p-2 bg-base-100">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul> */}
                                </li>

                            </ul>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0">

                                <li tabindex="0">
                                    <a><FontAwesomeIcon icon={faBurger} />
                                        Breakfast
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    {/* <ul className="p-2 bg-base-100">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul> */}
                                </li>

                            </ul>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0">

                                <li tabindex="0">
                                    <a><FontAwesomeIcon icon={faPizzaSlice} />
                                        Beverage
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    {/* <ul className="p-2 bg-base-100">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul> */}
                                </li>

                            </ul>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0">

                                <li tabindex="0">
                                    <a><FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} />
                                        Health & Beauty
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    {/* <ul className="p-2 bg-base-100">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul> */}
                                </li>

                            </ul>
                        </div>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Drawer;