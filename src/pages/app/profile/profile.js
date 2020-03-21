import React from 'react';

export default class Profile extends React.Component {

    constructor() {
        super();

        console.log(this.props);
        
    }

    render() {
        return(
            <h2>Welcome to the profile page</h2>
        )
    }
}