import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openWeatherData } from "../actions/openweather-action";
import { bindActionCreators } from 'redux';

class SearchBar extends Component
{
    constructor(props)
    {
        super(props);

        this.onType = this.onType.bind(this);
    }

    onType(e)
    {
        if(e.target.value)
            this.props.openWeatherData(e.target.value);
    }

    render()
    {
        return(
            <input
                onBlur={this.onType}
            />
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ openWeatherData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

