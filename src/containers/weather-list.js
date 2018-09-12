import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openWeatherData } from "../actions/openweather-action";
import { bindActionCreators } from 'redux';

class WeatherList extends Component {
    renderList(){
        if(this.props.weather)
            if(this.props.weather.request.status === 200)
            return this.props.weather.data.list.map((w) => {
                return (
                    <li key={w.dt_txt} className="weather-list-item">{w.dt_txt}     {w.main.temp}</li>
                );
            });
            else
                return (<div>City not found...</div>);
    }

    render(){
        return (
            <ul className="weather-list">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
      weather: state.weather
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ openWeatherData: openWeatherData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
