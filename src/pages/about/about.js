import React from 'react';

export default class About extends React.Component {



    render() {

        document.title = "Productiiv - About Productiiv";

        return(
            <section>
                <div className="live-wrapper"> 
                    <div className="container">
                        <h4>About Productiiv.</h4>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p> 
                    </div>
                </div>

                <div className="sponsors-wrapper" id="sponsors">
                    <div className="container">
                        <h4>Get in touch</h4>
                        <p> Get in touch with us through the form below or simply by sending us an email to <a href="mailto:info@productiiv.io">info@productiiv.io</a> </p>
                        <div className="support-section">
                            <h5>Create form</h5>
                            <form>
                                todo
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}