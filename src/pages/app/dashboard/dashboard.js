import React from 'react';
import AppNavbarComponent from '../../../page-components/app.navbar.component';
import Axios from 'axios'

export default class Dashboard extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }

        this.getProfile()
    }

    getProfile() {
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
        return (
            <div style={{ backgroundColor: 'black' }}>
                <div className="container" >
                    <AppNavbarComponent username={this.state.user.username} />
                </div>
            </div>

        );
    }
}