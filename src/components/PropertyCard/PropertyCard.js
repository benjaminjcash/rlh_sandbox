import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBody, CardText, CardLink } from 'reactstrap';

export default class PropertyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelData: {},
            rates: []
        }
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                </CardBody>
                <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </CardBody>
            </Card>
        )
    }
}