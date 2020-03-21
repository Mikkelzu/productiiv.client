import React from 'react';
import NavbarComponent from '../../page-components/navbar.component';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Signup extends React.Component {
    constructor() {
        super();

        this.state = {
            redirect: false,
            access_token: ''
        }
        
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value,
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,

        };

        axios.post('http://localhost:3000/regiser', payload)
            .then(res => {
                // todo check for errors.
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {

        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/login" />
        }

        return (
            <div style={{ backgroundColor: 'black' }}>
                <div className="container" >
                    <NavbarComponent />
                </div>
                <div className="newsletter-wrapper">
                    <div className="signup container">
                        <div className="hgroup">
                            <h3>Sign up</h3>
                            <p> Sign up for a <span className="highlighted-text-secondary">free</span> account to get access to the <span className="highlighted-text">Productiiv</span> web app.
                                <br />
                                To upgrade your account package, you can easily do this from within the main dashboard. Enjoy!
                            </p>
                        </div>
                        <div className="newsletter-form">
                            <form className="form-wrapper" onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                    <input id="username" className="form-control" name="username" type="text" placeholder="Username" required="" />
                                </div>

                                <div className="form-group">
                                    <input id="email" className="form-control" name="email" type="email" placeholder="Email address.." required="" />
                                </div>

                                <div className="form-group">
                                    <input id="password" className="form-control" name="password" type="password" placeholder="Password..." />
                                </div>

                                <div className="form-group">
                                    <input id="firstname" name="firstName" className="form-control" placeholder="Your name..." />
                                </div>

                                <div className="form-group">
                                    <input id="lastname" name="lastName" className="form-control" placeholder="Your last name..." />
                                </div>

                                <button type="submit" className="signup-button">
                                    Sign up <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}