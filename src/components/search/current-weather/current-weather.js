import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">city</p>
                <p className="weather-description">desc</p>
            </div>
            <img alt="weather" className="weather-icon" src="icons/icons8-été-48.png" />
        </div>
    );
}

export default CurrentWeather;