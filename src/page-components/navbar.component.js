import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navbar.style.css';

export default class NavbarComponent extends React.Component {

    render() {
        return (
            <div className="top-wrapper">
                <div className="logo-wrapper d-inline-block">
                    <Link to="/">
                        <img src='/logo_small_icon_only_inverted.png' alt=""/>
                    </Link>
                </div>

                <nav className="pull-right">
                    <ul className="nav-wrapper">
                        <li className="hidden-xs">
                            <NavLink activeClassName="active" to="/about">
                                ABOUT <i className="fas fa-comment-dots"></i>
                            </NavLink>
                        </li>
                        {/* <li className="hidden-sm">
                                            <NavLink activeClassName="active" to="/services">
                                            SERVICES <i className="fas fa-layer-group"></i>
                                            </NavLink>
                                        </li> */}
                                        {/* TEST LINKS FOR DASHBOARD */}
                                        <li>
                                            <NavLink to="/dashboard">
                                                Dashboard <i className="fas fa-dashboard"></i>
                                            </NavLink>
                                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/pricing">
                                PRICING <i className="fas fa-dollar-sign"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/login">
                                LOGIN <i className="fas fa-paper-plane"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/signup">
                                SIGN UP <i className="fas fa-user-plus"></i>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}