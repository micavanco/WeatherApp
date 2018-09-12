import React, { Component } from 'react';
import WeatherList from '../containers/weather-list';
import axios from 'axios';

const API_KEY = 'b005ba3e47be51a4589a6e477bb77b4c';

class OpenWeatherMap extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
            return (
             <WeatherList/>
            );
    }
}

export default OpenWeatherMap;
