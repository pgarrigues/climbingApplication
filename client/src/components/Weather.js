import React from 'react'
import WeeklyChart from './WeeklyChart'
import '../styles/components/weather.css'

const Weather = ({activeSpot, weatherDescription}) => {

    // heures
    let timePlusTwo = new Date().getHours()+2 < 24 ? new Date().getHours()+2 : new Date().getHours()+2-24;
    let timePlusFour = new Date().getHours()+4 < 24 ? new Date().getHours()+4 : new Date().getHours()+4-24;
    let timePlusSix = new Date().getHours()+6 < 24 ? new Date().getHours()+6 : new Date().getHours()+6-24;
    let timePlusHeight = new Date().getHours()+8 < 24 ? new Date().getHours()+8 : new Date().getHours()+8-24;
    let timePlusTen = new Date().getHours()+10 < 24 ? new Date().getHours()+10 : new Date().getHours()+10-24;
    let timePlusTwelve = new Date().getHours()+12 < 24 ? new Date().getHours()+12 : new Date().getHours()+12-24;

    // jours semaines
    const weekDays=['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    let today= new Date();
    let options= {weekday: 'long'};
    let currentDay = today.toLocaleDateString('fr-Fr', options);
    currentDay = currentDay.charAt(0).toUpperCase() + currentDay.slice(1);
    let orderedWeekDaysStartingTomorrow = weekDays.slice(weekDays.indexOf(currentDay)+1).concat(weekDays.slice(0, weekDays.indexOf(currentDay)+1));

    return (
        <div className='weather-container'>
            <div className='left-panel'>
                <div className='current-weather'>
                    <h1>{activeSpot ? activeSpot.spot : 'Aucun spot sélectionné'}</h1>
                    <p>{activeSpot ? activeSpot.region : ''}</p>
                    {activeSpot ? 
                    <div style={{background:'white'}}>
                        <img src={require(`../assets/weatherIcons/${weatherDescription.icon}.svg`).default} alt="weather" width="100" height="100"/>
                    </div> : ''}
                    <p>{activeSpot ? `${weatherDescription.currentWeatherDescription.toUpperCase()}` : ''}</p>
                    <p>{activeSpot ? `${weatherDescription.currentTemp}°` : ''}</p>
                    <p>{weatherDescription.currentRain ? `Pluie : ${weatherDescription.currentRain["1h"]} mm dans l'heure` : ''}</p>
                    <p>{activeSpot ? `Humidité : ${weatherDescription.currentHumidity} %` : ''}</p>
                    <p>{activeSpot ? `Vent : ${weatherDescription.currentWind} km/h` : ''}</p>
                </div>
                <div className='daily-weather'>
                    <h2>{activeSpot ? 'Prévisions journées' : ''}</h2>
                    <ul className="withOutDot">
                        <li>{activeSpot ? `${weatherDescription.dailyWeatherDescription.toUpperCase()}` : ''}</li>
                        <li>{activeSpot ? `${weatherDescription.dailyMinTemp}° | ${weatherDescription.dailyMaxTemp}°` : ''}</li>
                        <li>{weatherDescription.dailyRain ? `Précipitations : ${weatherDescription.dailyRain} mm` : ''}</li>
                        <li>{activeSpot ? `Humidité : ${weatherDescription.dailyHumidity} %` : ''}</li>
                        <li>{activeSpot ? `Vent moyen : ${weatherDescription.dailyWind} km/h` : ''}</li>
                        <li>{activeSpot ? `Lever soleil : ${weatherDescription.dailySunrise}` : ''}</li>
                        <li>{activeSpot ? `Coucher soleil : ${weatherDescription.dailySunset}` : ''}</li>
                        <li>{activeSpot ? `Indice UV : ${weatherDescription.dailyUVi}` : ''}</li>
                    </ul>
                </div>
                <div className='weekly-graph'>
                    {activeSpot ? <WeeklyChart weatherDescription={weatherDescription}/> : ''}
                </div>
            </div>
            <div className={activeSpot ? 'right-panel border-left' : 'right-panel'}>
                {/* Div météo par heure */}
                <div className={activeSpot ? 'hourly-weather border-bottom' : 'hourly-weather'} >
                    {/* 1ère ligne */}
                        <div className='weather-case'></div>
                        <div className='weather-case'></div>
                        {activeSpot ? <div className='weather-case'>Temp</div> : <div className='weather-case'></div>}
                        {activeSpot ? <div className='weather-case'>Humidité</div> : <div className='weather-case'></div>}
                        {activeSpot ? <div className='weather-case'>Précip</div> : <div className='weather-case'></div>}
                    {/* 2ème ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{timePlusTwo}h</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconHourPlusTwo}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherTempPlusTwo}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusTwo}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusTwo ?
                        <div className='weather-case'>{weatherDescription.rainPlusTwo["1h"]}mm</div>
                        : <div className='weather-case'></div> }
                    {/* 3ème ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{timePlusFour}h</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconHourPlusFour}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherTempPlusFour}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusFour}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusFour ?
                        <div className='weather-case'>{weatherDescription.rainPlusFour["1h"]}mm</div>
                        : <div className='weather-case'></div> }
                    {/* 4ème ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{timePlusSix}h</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconHourPlusSix}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherTempPlusSix}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusSix}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusSix ?
                        <div className='weather-case'>{weatherDescription.rainPlusSix["1h"]}mm</div>
                        : <div className='weather-case'></div> }
                    {/* 5ème ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{timePlusHeight}h</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconHourPlusHeight}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherTempPlusHeight}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusHeight}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusHeight ?
                        <div className='weather-case'>{weatherDescription.rainPlusHeight["1h"]}mm</div>
                        : <div className='weather-case'></div> }
                    {/* 6ème ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{timePlusTen}h</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconHourPlusTen}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherTempPlusTen}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusTen}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusTen ?
                        <div className='weather-case'>{weatherDescription.rainPlusTen["1h"]}mm</div>
                        : <div className='weather-case'></div> }
                    {/* 7ème ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{timePlusTwelve}h</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconHourPlusTwelve}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherTempPlusTwelve}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusTwelve}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusTwelve ?
                        <div className='weather-case'>{weatherDescription.rainPlusTwelve["1h"]}mm</div>
                        : <div className='weather-case'></div> }
                </div>
                {/* Div météo par jour */}
                <div className='weekly-weather'>
                    {/* 1ère ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{orderedWeekDaysStartingTomorrow[0]}</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconDayPlusOne}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherMinTempPlusOneDay}° | {weatherDescription.weatherMaxTempPlusOneDay}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusOneDay}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusOneDay ?
                        <div className='weather-case'>{weatherDescription.rainPlusOneDay}mm</div>
                        : <div className='weather-case'></div> }
                    {/* 2ème ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{orderedWeekDaysStartingTomorrow[1]}</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconDayPlusTwo}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherMinTempPlusTwoDays}° | {weatherDescription.weatherMaxTempPlusTwoDays}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusTwoDays}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusTwoDays ?
                        <div className='weather-case'>{weatherDescription.rainPlusTwoDays}mm</div>
                        : <div className='weather-case'></div> }
                    {/* 3ème ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{orderedWeekDaysStartingTomorrow[2]}</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconDayPlusThree}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherMinTempPlusThreeDays}° | {weatherDescription.weatherMaxTempPlusThreeDays}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusThreeDays}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusThreeDays ?
                        <div className='weather-case'>{weatherDescription.rainPlusThreeDays}mm</div>
                        : <div className='weather-case'></div> }
                    {/* 4ème ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{orderedWeekDaysStartingTomorrow[3]}</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconDayPlusFour}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherMinTempPlusFourDays}° | {weatherDescription.weatherMaxTempPlusFourDays}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusFourDays}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusFourDays ?
                        <div className='weather-case'>{weatherDescription.rainPlusFourDays}mm</div>
                        : <div className='weather-case'></div> }
                    {/* 5ème ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{orderedWeekDaysStartingTomorrow[4]}</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconDayPlusFive}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherMinTempPlusFiveDays}° | {weatherDescription.weatherMaxTempPlusFiveDays}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusFiveDays}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusFiveDays ?
                        <div className='weather-case'>{weatherDescription.rainPlusFiveDays}mm</div>
                        : <div className='weather-case'></div> }
                    {/* 6ème ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{orderedWeekDaysStartingTomorrow[5]}</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconDayPlusSix}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherMinTempPlusSixDays}° | {weatherDescription.weatherMaxTempPlusSixDays}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusSixDays}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusSixDays ?
                        <div className='weather-case'>{weatherDescription.rainPlusSixDays}mm</div>
                        : <div className='weather-case'></div> }
                    {/* 7ème ligne */}
                        {/* 1ère colonne */}
                        {activeSpot ? <div className='weather-case'>{orderedWeekDaysStartingTomorrow[6]}</div> : <div className='weather-case'></div>}
                        {/* 2ème colonne */}
                        {activeSpot ? 
                        <div className='weather-case' style={{background:'white'}}>
                            <img src={require(`../assets/weatherIcons/${weatherDescription.iconDayPlusSeven}.svg`).default} alt="weather" width="50" height="50"/>
                        </div> : <div className='weather-case'></div> }
                        {/* 3ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.weatherMinTempPlusSevenDays}° | {weatherDescription.weatherMaxTempPlusSevenDays}°</div>
                        : <div className='weather-case'></div> }
                        {/* 4ème colonne */}
                        {activeSpot ?
                        <div className='weather-case'>{weatherDescription.humidityPlusSevenDays}%</div>
                        : <div className='weather-case'></div> }
                        {/* 5ème colonne */}
                        {weatherDescription.rainPlusSevenDays ?
                        <div className='weather-case'>{weatherDescription.rainPlusSevenDays}mm</div>
                        : <div className='weather-case'></div> }
                </div>
            </div>
        </div>
    )
}

export default Weather