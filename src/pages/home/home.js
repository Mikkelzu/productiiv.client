import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {

    render() {
        document.title = "Productiiv - Your producitivty platform easily available.";
        return (
            <div>
                <div className="highlights-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 highlight-block">
                                <div className="icon-wrapper">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/af047ac54e246e4a16a9874f8f8e8b23b944786a/4f102/3d.87c64f5b.svg" />
                                </div>
                                <h5>subtitle</h5>
                                <p> Text for shit</p>
                            </div>
                            <div className="col-md-4 highlight-block">
                                <div className="icon-wrapper">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/c62c21329677dea388a08c2da8912c6d655b935e/9b1d8/quality.2871f361.svg" />
                                </div>
                                <h5>subtitle</h5>
                                <p> more text </p>
                            </div>
                            <div className="col-md-4 highlight-block">
                                <div className="icon-wrapper">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/6fd3f1586e44b418a4afd53bc81c76f5d970f51a/d33f9/magic-wand.f171d0b3.svg" />
                                </div>
                                <h5>subtitle</h5>
                                <p> more text </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="live-wrapper"> 
                    <div className="container">
                        <h4>Vision</h4>
                        <p>
                            We want to encourage <span className="highlighted-text">healthy productivty</span> at your own pace and stay <span className="highlighted-text">happy</span> and <span className="highlighted-text">healthy</span> while doing your work.
                        </p> 
                    </div>
                </div>

                <div className="enterprise-wrapper" id="enterprise">
                    <div className="container">
                        <div className="enterprise-column">
                            <h2> Get started for free or look at our pricings to determine your needs. </h2>
                            <p> We pride ourselves on putting <span className="highlighted-text-secondary">productivity</span> and <span className="highlighted-text-secondary">health</span> first. </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}