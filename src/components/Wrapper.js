import React, {Component} from 'react';
import WetterOnline from "./WetterOnline";
import WindGuru from "./WindGuru";
import OpenWeatherMap from "./OpenWeatherMap";
import SearchBar from "./SearchBar";

class Wrapper extends Component{

    constructor(){
        super();

    }

    render() {
        return (
            <div className="wrapper">
                <h1>Weather App</h1>
                <SearchBar/>
                <OpenWeatherMap/>
            </div>
        );
    }


}

export default Wrapper;