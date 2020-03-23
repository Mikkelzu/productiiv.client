import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.style.css';
import Axios from 'axios';

export default class AppNavbarComponent extends React.Component {


    constructor(props) {
        super(props);

        this.state = {

        }
    }

    logout = () => {

        var cookie = document.cookie;

        if (cookie) {
            console.log(cookie)
        }

        // todo destroy cookie from session
        Axios.get('http://localhost:3000/auth/logout', {withCredentials: true})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                console.log('finito');
                
            })
    }

    render() {

        return (
            <div className="top-wrapper">
                <div className="logo-wrapper d-inline-block">
                    <Link to="/dashboard">
                        <img src="/logo_small_icon_only_inverted.png" alt="NestJS - A progressive Node.js framework" />
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
                                {this.props.username} <i className="fas fa-user"></i>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/breaks">
                                Break Scheduler <i className="fas fa-coffee"></i>
                            </NavLink>
                        </li>

                        <li>
                            <Link alt="sign out" to="/profile" onClick={ () => { this.logout()} }>
                            <i alt="Sign out" className="fas fa-sign-out-alt"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}