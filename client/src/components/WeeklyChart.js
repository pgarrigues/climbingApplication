import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2';

const WeeklyChart = ({weatherDescription}) => {

    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const chart = () => {
        setChartData({
                labels: ['J+1', 'J+2', 'J+3', 'J+4', 'J+5', 'J+6', 'J+7'],
                datasets: [
                {
                    label: 'Températures min',
                    data: [weatherDescription.weatherMinTempPlusOneDay, 
                            weatherDescription.weatherMinTempPlusTwoDays, 
                            weatherDescription.weatherMinTempPlusThreeDays, 
                            weatherDescription.weatherMinTempPlusFourDays, 
                            weatherDescription.weatherMinTempPlusFiveDays,
                            weatherDescription.weatherMinTempPlusSixDays,
                            weatherDescription.weatherMinTempPlusSevenDays
                        ],
                    backgroundColor: [
                        '#71C9CA'
                    ],
                    borderWidth: 4
                },
                {
                    label: 'Températures max',
                    data: [weatherDescription.weatherMaxTempPlusOneDay, 
                            weatherDescription.weatherMaxTempPlusTwoDays,
                            weatherDescription.weatherMaxTempPlusThreeDays, 
                            weatherDescription.weatherMaxTempPlusFourDays, 
                            weatherDescription.weatherMaxTempPlusFiveDays, 
                            weatherDescription.weatherMaxTempPlusSixDays, 
                            weatherDescription.weatherMaxTempPlusSevenDays
                        ],
                    backgroundColor: [
                        '#ED462F'
                    ],
                    borderWidth: 4
                }]
            })
        }
        chart();
    }, [weatherDescription.weatherMinTempPlusOneDay, 
        weatherDescription.weatherMinTempPlusTwoDays, 
        weatherDescription.weatherMinTempPlusThreeDays, 
        weatherDescription.weatherMinTempPlusFourDays, 
        weatherDescription.weatherMinTempPlusFiveDays,
        weatherDescription.weatherMinTempPlusSixDays,
        weatherDescription.weatherMinTempPlusSevenDays,
        weatherDescription.weatherMaxTempPlusOneDay, 
        weatherDescription.weatherMaxTempPlusTwoDays,
        weatherDescription.weatherMaxTempPlusThreeDays, 
        weatherDescription.weatherMaxTempPlusFourDays, 
        weatherDescription.weatherMaxTempPlusFiveDays, 
        weatherDescription.weatherMaxTempPlusSixDays, 
        weatherDescription.weatherMaxTempPlusSevenDays
    ]);

    return (
        <div>
            <Line data={chartData}/>
        </div>
    )
}

export default WeeklyChart
