import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">city</p>
                    <p className="weather-description">desc</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/icons8-été-48.png" />
            </div>
            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Ressenti</span>
                        <span className="parameter-value">22°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Vent</span>
                        <span className="parameter-value">20km/h</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidité</span>
                        <span className="parameter-value">80%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pression</span>
                        <span className="parameter-value">15 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;