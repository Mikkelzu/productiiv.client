import React from 'react';

export default class Signup extends React.Component {

    render() {
        return(
            <div>
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
                            <form className="form-wrapper">
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