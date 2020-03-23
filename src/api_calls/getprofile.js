import Axios from 'axios';

export default function getProfile() {
    return Axios.get('http://localhost:3000/profile', {withCredentials:true})
        .then((res) => {
            console.log(res.data)
            return {
                username: res.data.username,
                firstName: res.data.firstName,
                lastName: res.data.lastName
            }
            // this.setState({
            //     user: {
            //         username: res.data.username,
            //         firstName: res.data.firstName,
            //         lastName: res.data.lastName
            //     }
            // })
        })
        .catch((err) => {
            console.log('error', err)
        })
        .finally(() => {
            console.log('finished.')
        })
}