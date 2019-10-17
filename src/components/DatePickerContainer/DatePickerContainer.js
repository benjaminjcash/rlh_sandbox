import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class DatePickerContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            startDate: '',
            endDate: ''
        }
    }

    handleStartDateChange = date => {
        this.setState({
            startDate: date
        });
        this.props.onStartDateSelected(date);
    };

    handleEndDateChange = date => {
        this.setState({
            endDate: date
        });
        this.props.onEndDateSelected(date);
    };

     render() {
         return (
             [
                 <DatePicker 
                    selected={this.state.startDate}
                    onChange={this.handleStartDateChange}
                    key='startdate'
                 />,
                 <DatePicker 
                    selected={this.state.endDate}
                    onChange={this.handleEndDateChange}
                    key='enddate'
                 />
             ]
         )
     }
}