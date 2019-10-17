import React from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

export default class AutosuggestContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        }
    }

    getSuggestionValue = suggestion => suggestion.display;
    
    getSectionSuggestions = section => section.suggestions;

    renderSuggestion = suggestion => <p>{suggestion.display}</p>;

    renderSectionTitle = section => <p>{section.title}</p>;

    parseSuggestionResponse = (data) => {
        return [
            {
                title: 'Cities',
                suggestions: data.filter((data) => data.type === 'cities')
            },
            {
                title: 'Hotels',
                suggestions: data.filter((data) => data.type === 'hotels')
            },
            {
                title: 'Points',
                suggestions: data.filter((data) => data.type === 'points')
            },
            {
                title: 'Airports',
                suggestions: data.filter((data) => data.type === 'airports')
            }
        ];
    }

    onSuggestionsFetchRequested = ({ value }) => {
        axios
            .get(`https://staging.redlion.com/api/autocomplete?_format=json&search=${value}`)
            .then((res) => {
                const { data } = res;
                const parsedSuggestions = this.parseSuggestionResponse(data);
                this.setState({
                    suggestions: parsedSuggestions
                });
            });
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    }

    onSuggestionSelected = (event, { suggestion }) => {
        this.props.onLocationSelected(suggestion);
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
                getSuggestionValue={this.getSuggestionValue}
                onSuggestionSelected={this.onSuggestionSelected}
                inputProps={inputProps}
                multiSection={true}
                renderSectionTitle={this.renderSectionTitle}
                renderSuggestion={this.renderSuggestion}
                getSectionSuggestions={this.getSectionSuggestions}
            />
        )
    }       
}