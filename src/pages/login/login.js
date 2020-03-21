import React from 'react';
import NavbarComponent from '../../page-components/navbar.component';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            redirect: false,
            access_token: ''
        }
        
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const payload = { username: event.target.username.value, password: event.target.password.value };

        axios.post('http://localhost:3000/auth/login', payload)
            .then(res => {
                this.setState({ redirect: true, access_token: res.data.access_token })
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/profile" />
        }

        return (
            <div style={{ backgroundColor: 'black' }}>
                <div className="container" >
                    <NavbarComponent />
                </div>
                <div className="newsletter-wrapper">
                    <div className="signup container">
                        <div className="hgroup">
                            <h3>Login</h3>
                            <p> Login to your account to get access to the <span className="highlighted-text">Productiiv</span> web app. </p>
                        </div>
                        <div className="newsletter-form">
                            <form onSubmit={this.handleSubmit} className="form-wrapper">
                                <div className="form-group">
                                    <input id="username" className="form-control" name="username" type="username" placeholder="Username.." required="" />
                                </div>

                                <div className="form-group">
                                    <input id="password" className="form-control" name="password" type="password" placeholder="Password..." />
                                </div>

                                <button type="submit" className="signup-button">
                                    Login <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}