import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.style.css';

export default class AppNavbarComponent extends React.Component {

    render() {
        return (
            <div className="top-wrapper">
                <div className="logo-wrapper d-inline-block">
                    <Link to="/dashboard">
                        <img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" alt="NestJS - A progressive Node.js framework" />
                    </Link>
                </div>

                <nav className="pull-right">
                    <ul className="nav-wrapper">
                        {/* <li className="hidden-sm">
                                            <NavLink activeClassName="active" to="/services">
                                            SERVICES <i className="fas fa-layer-group"></i>
                                            </NavLink>
                                        </li> */}
                        <li>
                            <NavLink activeClassName="active" to="/dashboard">
                                Dashboard <i className="fas fa-table"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/profile">
                                NAME <i className="fas fa-user"></i>
                            </NavLink>
                        </li>

                        <li>
                            <Link>
                                Break Scheduler <i className="fas fa-coffee"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}