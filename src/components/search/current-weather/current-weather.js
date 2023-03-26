import "./current-weather.css"

const CurrentWeather = ({ data }) => {
    const tempRessentieCelsius = Number(data.main["feels_like"] - 273.15).toFixed(1);
    const tempCelsius = Number(data.main["temp"] - 273.15).toFixed(1);
    const vitesseVent = Number(data.wind["speed"] * 3.6).toFixed(1);
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt={`${data.weather[0].icon}`} className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{tempCelsius}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Détails</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Ressenti</span>
                        <span className="parameter-value ressenti">{tempRessentieCelsius}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Vent</span>
                        <span className="parameter-value">{vitesseVent}km/h</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidité</span>
                        <span className="parameter-value">{data.main["humidity"]}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pression</span>
                        <span className="parameter-value">{data.main["pressure"]}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;