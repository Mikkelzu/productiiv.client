import React from 'react';

export default class Login extends React.Component {

    render() {
        return (
            <div>
                <div className="newsletter-wrapper">
                    <div className="signup container">
                        <div className="hgroup">
                            <h3>Login</h3>
                            <p> Login to your account to get access to the <span className="highlighted-text">Productiiv</span> web app. </p>
                        </div>
                        <div className="newsletter-form">
                            <form className="form-wrapper">
                                <div className="form-group">
                                    <input id="email" className="form-control" name="email" type="email" placeholder="Email address.." required="" />
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