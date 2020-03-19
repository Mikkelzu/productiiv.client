import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navbar.style.css';

export default class NavbarComponent extends React.Component {

    render() {
        return (
            <div className="top-wrapper">
                <div className="logo-wrapper d-inline-block">
                    <Link to="/">
                        <img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" alt="NestJS - A progressive Node.js framework" />
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