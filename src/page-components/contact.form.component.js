import React from 'react';

export default class ContactFormComponent extends React.Component {

    render() {
        return(
            <form className="newsletter-form">
                <div className="form-group">
                    <input id="email" name="email" type="email" className="form-control" placeholder="Your E-mail address..." required />
                </div>
                <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="Your full name..." />
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" name="phone" placeholder="Phone number" />
                </div>
                <div className="form-group">
                    <textarea id="text" name="text" rows="5" className="form-control" placeholder="Your question or e-mail contents..." />
                </div>

                <button className="btn btn-primary">Send <i className="fas fa-envelope-open"></i></button>
                
            </form>
        );
    }
}