import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import Autosuggest from 'react-autosuggest';

const suggestions = ["denver", "denny's", "dentist"];
const getSuggestionValue = suggestion => suggestion;
const renderSuggestion = suggestion => (
    <Card>
        <CardBody>
            <CardText>{suggestion}</CardText>
        </CardBody>
    </Card>
);


export default class AutosuggestContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        }
    }

    getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : suggestions.filter(dword => {
            return dword.toLowerCase().slice(0, inputLength) === inputValue;
        });
    }   

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        })
    }

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            value,
            onChange: this.onChange
        }

        return (
            <Autosuggest 
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        )
    }       
}