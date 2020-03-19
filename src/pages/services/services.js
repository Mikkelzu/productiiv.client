import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Service from './service';
import NavbarComponent from '../../page-components/navbar.component';

export default function Services() {

    document.title = "Productiiv - Services";

    let match = useRouteMatch();

    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className="container" >
                <NavbarComponent />
            </div>
            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>

                    <div className="live-wrapper">
                        <div className="container">
                            <Service />
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
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    )
}