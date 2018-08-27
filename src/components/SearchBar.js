import React, { Component } from 'react';

class SearchBar extends Component
{
    constructor(props)
    {
        super(props);

        this.state = { city: '' };
    }

    render()
    {
        return(
            <input
                value={ this.state.city}
                onBlur={event => this.setState({ city: event.target.value })}
            />
        );
    }

}

export default SearchBar;