import React from 'react';
import Axios from 'axios';
import AppNavbarComponent from '../../../page-components/app.navbar.component';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }

        this.getCookieData();
    }

    getCookieData() {
        return Axios.get('http://localhost:3000/profile', {withCredentials:true})
            .then((res) => {
                console.log(res.data)
                this.setState({
                    user: {
                        username: res.data.username,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName
                    }
                })
            })
            .catch((err) => {
                console.log('error', err)
            })
            .finally(() => {
                console.log('finished.')
            })
    }
    render() {
        return(
            <div style={{ backgroundColor: 'black' }}>
                <div className="container" >
                    <AppNavbarComponent username={this.state.user.username} />
                </div>

                <div className="highlights-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <h4>Your info</h4>
                                <p>{ this.state.user.firstName } {this.state.user.lastName} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}