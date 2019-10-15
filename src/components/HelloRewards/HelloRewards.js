import React from 'react';
import axios from 'axios';

export default class HelloRewards extends React.Component {
    constructor(props) {
        super(props);
         
        this.state = {
            error: null,
            isLoaded: false,
            profile: null
        };
    }

    componentDidMount() {
        let oktaId = this.props.oktaid;
        axios.post('https://core.redlion.com/api/hello-rewards/fetchcontact?Content-Type=application/json', { oktaId })
            .then((data) => {
                let profile = data.data.crmProfile.value[0];
                this.setState({
                    isLoaded: true,
                    profile
                });
            }).catch((error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    render() {
        const { error, isLoaded, profile } = this.state;
        if (isLoaded) {
            const { first_name, last_name, address1, city, state, zip } = profile;
                if (error) {
                    console.error(error);
                }
                return (
                    <div>
                    <h1>{`${first_name} ${last_name}`}</h1>
                    <h3>{address1}</h3>
                    <h3>{city}</h3>
                    <h3>{state}</h3>
                    <h3>{zip}</h3>
                </div>
                );
        } else {
            return null;
        }
    }
}
