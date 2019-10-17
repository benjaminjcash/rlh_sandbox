import React from 'react';

export default class PropertyCardList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            properties: [],
            doRenderCards: false
        }
    }

    componentDidUpdate({ prevProps }) {
        if (prevProps && this.props.properties !== prevProps.properties) {
            this.setState({
                properties: this.props.properties,
                doRenderCards: true
            });

        }
    }

    render() {
        const { doRenderCards, properties } = this.state;

        if (doRenderCards) {
            return <p>CARDS</p>
        } else {
            return null;
        }
    }
}