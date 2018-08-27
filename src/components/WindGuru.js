import React, {Component} from 'react';
import WeatherItem from './WeatherItem';

export default class WindGuru extends Component {
    render()
    {
        let weatherItems;
        if(this.props.weathers)
        {
            weatherItems = this.props.weathers.map(weather =>{
                return(
                    <WeatherItem key={weather.time} weather = {weather}/>
                );
            });
        }
        return (
            <div className="windGuru">
                {weatherItems}<br/>
                : {this.props.city.value}
            </div>
        );
    }
}