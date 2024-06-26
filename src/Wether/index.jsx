import React, { Component } from 'react';

export default class Weather extends Component {

    state = {
        city: '',
        weather: null,
        error: null,
    };


    weatherData = {
        'Ahemdabad': 'Sunny, 25°C',
        'Mahesana': 'Cloudy, 18°C',
        'Kadi': 'Rainy, 15°C',
        'Ghandhinagar': 'Clear, 20°C',
        'Kalol': 'Windy, 22°C',
    };

    handleChange = (event) => {
        this.setState({ city: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { city } = this.state;
        const weather = this.weatherData[city];
        if (weather) {
            this.setState({ weather, error: null });
        } else {
            this.setState({ weather: null, error: 'City not found' });
        }
    };

    render() {
        const { city, weather, error } = this.state;

        return (
            <div className='flex flex-col items-center justify-center h-screen'>
                <form className="flex" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="city" className="sr-only">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            value={city}
                            onChange={this.handleChange}
                            placeholder="Enter your City here..."
                            className="rounded-l-md"
                            required
                        />
                    </div>
                    <button type="submit" className="btn rounded-l-none">
                        Find weather
                    </button>
                </form>
                <div className="mt-4">
                    {weather && <p>Weather in {city}: {weather}</p>}
                    {error && <p>{error}</p>}
                </div>
            </div>
        );
    }
}
