import React from 'react';
import AutosuggestContainer from '../AutosuggestContainer/AutosuggestContainer';
import DatePickerContainer from '../DatePickerContainer/DatePickerContainer';
import { Row, Col, Button } from 'reactstrap';
import './GlobalSearch.css';
import axios from 'axios';

export default class GlobalSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {},
            startDate: '',
            endDate: '',
            properties: []
        }
    }

    getNearbyProperties = () => {
        axios
            .get(`https://staging.redlion.com/api/hotel-proximity?_format=json&coordinates[value]=100&coordinates[source_configuration][origin][lat]=${this.state.location.lat}&coordinates[source_configuration][origin][lon]=${this.state.location.lng}`)
            .then(({ data }) => {
                this.setState({
                    properties: data
                });
            });
    }

    onLocationSelected = (location) => {
        this.setState({
            location: {
                lat: location.lat,
                lng: location.lng
            }
        });
    }

    onStartDateSelected = (startDate) => {
        this.setState({
            startDate
        });
    }
    
    onEndDateSelected = (endDate) => {
        this.setState({
            endDate
        })
    }

    render() {
        return (
            <Row>
                <Col>
                    <AutosuggestContainer onLocationSelected={this.onLocationSelected}/>
                </Col>
                <Col>
                    <DatePickerContainer onStartDateSelected={this.onStartDateSelected} onEndDateSelected={this.onEndDateSelected}/>
                </Col>
                <Col>
                    <Button color='primary' size='sm' onClick={this.getNearbyProperties}>Check Availability</Button>
                </Col>
            </Row>
        )
    }
}
