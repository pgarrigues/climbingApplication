import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2';
import '../styles/components/weather.css'

const Weather = ({info, activeSpot, infoWeatherDescription, infoTemperature, infoHumidity, infoWindSpeed, 
                    minDayOne, minDayTwo, minDayThree, minDayFour, minDayFive,
                    maxDayOne, maxDayTwo, maxDayThree, maxDayFour, maxDayFive
                }) => {

    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const chart = () => {
        setChartData({
                labels: ['j1', 'j2', 'j3', 'j4', 'j5'],
                datasets: [
                {
                    label: 'min temperatures',
                    data: [minDayOne, minDayTwo, minDayThree, minDayFour, minDayFive],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4
                },
                {
                    label: 'max temperatures',
                    data: [maxDayOne, maxDayTwo, maxDayThree, maxDayFour, maxDayFive],
                    backgroundColor: [
                        '#080909'
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
            <p>{activeSpot ? `${infoWeatherDescription.toUpperCase()}` : ''}</p>
            <p>{activeSpot ? `Température : ${infoTemperature} degrés` : ''}</p>
            <p>{activeSpot ? `Humidité : ${infoHumidity} %` : ''}</p>
            <p>{activeSpot && infoHumidity > 80 ? 'Humidité élevée' : ''}</p>
            <p>{activeSpot ? `Vitesse du vent : ${infoWindSpeed} km/h` : ''}</p>
            <p>{activeSpot ? `Min jour 1 : ${minDayOne} degrés` : ''}</p>
            <p>{activeSpot ? `Min jour 2 : ${minDayTwo} degrés` : ''}</p>
            <p>{activeSpot ? `Min jour 3 : ${minDayThree} degrés` : ''}</p>
            <p>{activeSpot ? `Min jour 4 : ${minDayFour} degrés` : ''}</p>
            <p>{activeSpot ? `Min jour 5 : ${minDayFive} degrés` : ''}</p>
            <div>
                <Line data={chartData}/>
            </div>
        </div>
    )
}

export default Weather