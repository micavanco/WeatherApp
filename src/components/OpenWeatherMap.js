import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = '';


class OpenWeatherMap extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            city: '',
            temp: 0
        };
    }

    componentDidMount()
    {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Wroclaw&units=metric&APPID='+API_KEY)
            .then(res => {
                this.setState({temp: res.data.main.temp,
                                city: res.data.name,});
            }).catch(error => alert(error));
    }

    render()
    {
            return <div>City: {this.state.city} Temp: { this.state.temp } &deg;C</div>;
    }

}

export default OpenWeatherMap;