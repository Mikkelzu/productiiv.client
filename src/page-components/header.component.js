import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import NavbarComponent from './navbar.component';

export class HeaderComponent extends React.Component {

    render() {

        return (
            <header className="page-header">
                <div className="container">

                        <NavbarComponent />


                        <div className="main-wrapper text-align-center">
                            <h1 className="hero-title"> Productiiv.io</h1>
                            <h4 className="hero-subtitle"> A producitivity platform to keep track of your important business! </h4>
                            <div className="buttons-wrapper">
                                <h3>Check out our current platform services and give them a quick read!</h3>
                                <Link to="/services/activity-time-tracker" className="btn btn-secondary d-inline-block">Activity Time Tracker</Link>
                                <Link to="/services/break-scheduler" className="btn btn-secondary d-inline-block">Break Scheduler</Link>
                            </div>
                        </div>
                    </div>
            </header>
        );
    }
}