import React from 'react'
import '../styles/components/weather.css'

const Weather = ({info, activeSpot, infoWeatherDescription, infoTemperature, infoHumidity, infoWindSpeed}) => {

    return (
        <div className='weather-container'>
            <h1>{info}</h1>
            <p>{activeSpot ? activeSpot.region : ''}</p>
            <br/>
            <h2>{activeSpot ? 'Météo :' : ''}</h2> 
            <p>{activeSpot ? `Description : ${infoWeatherDescription}` : ''}</p>
            <p>{activeSpot ? `Température : ${infoTemperature} degrés` : ''}</p>
            <p>{activeSpot ? `Humidité : ${infoHumidity}` : ''}</p>
            <p>{activeSpot ? `Vitesse du vent : ${infoWindSpeed} km/h` : ''}</p>
        </div>
    )
}

export default Weather
