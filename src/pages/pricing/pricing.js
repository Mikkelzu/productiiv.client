import React from 'react';
import NavbarComponent from '../../page-components/navbar.component';

export default class Pricing extends React.Component {

    render() {
        return (
            <section style={{backgroundColor:'black'}}>
            <div className="container" >
                <NavbarComponent />
            </div>
                <div className="highlights-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 highlight-block">
                                <div className="icon-wrapper">
                                    <img alt="" src="https://d33wubrfki0l68.cloudfront.net/af047ac54e246e4a16a9874f8f8e8b23b944786a/4f102/3d.87c64f5b.svg" />
                                </div>
                                <h5>Free</h5>
                                <p> Text for shit</p>
                            </div>
                            <div className="col-md-3 highlight-block">
                                <div className="icon-wrapper">
                                    <img alt="" src="https://d33wubrfki0l68.cloudfront.net/c62c21329677dea388a08c2da8912c6d655b935e/9b1d8/quality.2871f361.svg" />
                                </div>
                                <h5>Starter</h5>
                                <p> more text </p>
                            </div>
                            <div className="col-md-3 highlight-block">
                                <div className="icon-wrapper">
                                    <img alt="" src="https://d33wubrfki0l68.cloudfront.net/6fd3f1586e44b418a4afd53bc81c76f5d970f51a/d33f9/magic-wand.f171d0b3.svg" />
                                </div>
                                <h5>Small Teams</h5>
                                <p> more text </p>
                            </div>
                            <div className="col-md-3 highlight-block">
                                <div className="icon-wrapper">
                                    <img alt="" src="https://d33wubrfki0l68.cloudfront.net/6fd3f1586e44b418a4afd53bc81c76f5d970f51a/d33f9/magic-wand.f171d0b3.svg" />
                                </div>
                                <h5>Custom Plan</h5>
                                <p> more text </p>
                            </div>
                        </div>
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
        );
    }
}