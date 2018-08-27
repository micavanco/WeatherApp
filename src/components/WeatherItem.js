import React, {Component} from 'react';

export default class WeatherItem extends Component {
    render()
    {
        return (
            <li className="wetterOnline">
                {this.props.weather.time} : {this.props.weather.degrees} &deg;C
            </li>
        );
    }
}