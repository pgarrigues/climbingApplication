import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2';

const WeeklyChart = ({weatherDescription}) => {

    // jours semaines
    const weekDays=['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    let today= new Date();
    let options= {weekday: 'long'};
    let currentDay = today.toLocaleDateString('fr-Fr', options);
    currentDay = currentDay.charAt(0).toUpperCase() + currentDay.slice(1);
    const orderedWeekDaysStartingTomorrow = weekDays.slice(weekDays.indexOf(currentDay)+1).concat(weekDays.slice(0, weekDays.indexOf(currentDay)+1));

    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const chart = () => {
        setChartData({
                labels: [orderedWeekDaysStartingTomorrow[0], 
                        orderedWeekDaysStartingTomorrow[1], 
                        orderedWeekDaysStartingTomorrow[2], 
                        orderedWeekDaysStartingTomorrow[3], 
                        orderedWeekDaysStartingTomorrow[4], 
                        orderedWeekDaysStartingTomorrow[5], 
                        orderedWeekDaysStartingTomorrow[6]
                    ],
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
        weatherDescription.weatherMaxTempPlusSevenDays,
    ]);

    return (
        <div>
            <Line data={chartData}/>
        </div>
    )
}

export default WeeklyChart
