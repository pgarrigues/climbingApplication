import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2';
import '../styles/components/weather.css'

const Weather = ({info, activeSpot, infoWeatherDescription, icon, infoTemperature, infoHumidity, infoWindSpeed, 
                    minDayOne, minDayTwo, minDayThree, minDayFour, minDayFive,
                    maxDayOne, maxDayTwo, maxDayThree, maxDayFour, maxDayFive
                }) => {

    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const chart = () => {
        setChartData({
                labels: ['j+1', 'j+2', 'j+3', 'j+4', 'j+5'],
                datasets: [
                {
                    label: 'Températures min',
                    data: [minDayOne, minDayTwo, minDayThree, minDayFour, minDayFive],
                    backgroundColor: [
                        '#71C9CA'
                    ],
                    borderWidth: 4
                },
                {
                    label: 'Températures max',
                    data: [maxDayOne, maxDayTwo, maxDayThree, maxDayFour, maxDayFive],
                    backgroundColor: [
                        '#ED462F'
                    ],
                    borderWidth: 4
                }]
            })
        }
        chart();
    }, [minDayOne, minDayTwo, minDayThree, minDayFour, minDayFive, maxDayOne, maxDayTwo, maxDayThree, maxDayFour, maxDayFive]);

    return (
        <div className='weather-container'>
            <h1>{info}</h1>
            <p>{activeSpot ? activeSpot.region : ''}</p>
            <br/>
            <h2>{activeSpot ? 'Météo' : ''}</h2>
            {activeSpot ? 
            <div style={{background:'white'}}>
                <img src={require(`../assets/weatherIcons/${icon}.svg`).default} alt="weather" width="100" height="100"/>
            </div> : ''}
            <p>{activeSpot ? `${infoWeatherDescription.toUpperCase()}` : ''}</p>
            <p>{activeSpot ? `Température : ${infoTemperature} degrés` : ''}</p>
            <p>{activeSpot ? `Humidité : ${infoHumidity} %` : ''}</p>
            <p>{activeSpot && infoHumidity > 80 ? 'Humidité élevée' : ''}</p>
            <p>{activeSpot ? `Vitesse du vent : ${infoWindSpeed} km/h` : ''}</p>
            <br />
            {activeSpot ? 
            <div>
                <Line data={chartData}/>
            </div>
            : ''}
        </div>
    )
}

export default Weather