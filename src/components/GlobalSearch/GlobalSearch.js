import React from 'react';

export default class GlobalSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'key': 'value'
        }
    }

    render() {
        console.log(this.state.key);
        return null;
    }
}
