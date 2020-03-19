import React from 'react';
import AppNavbarComponent from '../../../page-components/app.navbar.component';

export default class Dashboard extends React.Component {

    render() {
        return (
            <div style={{ backgroundColor: 'black' }}>
                <div className="container" >
                    <AppNavbarComponent />
                </div>
            </div>

        );
    }
}