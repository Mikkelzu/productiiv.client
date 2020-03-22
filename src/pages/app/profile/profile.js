import React from 'react';
import Axios from 'axios';
import AppNavbarComponent from '../../../page-components/app.navbar.component';

export default class Profile extends React.Component {

    constructor() {
        super();

        this.state = {
            user: {}
        }
    }

    getCookieData() {
        return Axios.get('http://localhost:3000/profile', {withCredentials:true})
            .then((res) => {
                return res.data;
            });
    }
    render() {

    
        return(
            <div style={{ backgroundColor: 'black' }}>
                <div className="container" >
                    <AppNavbarComponent />
                </div>

                <div className="highlights-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                Suck my fucking dick
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}