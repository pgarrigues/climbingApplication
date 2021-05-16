import React, { useState } from 'react'
import SelectByKeyWord from '../components/SelectByKeyWord'
import SelectRegion from '../components/SelectRegion'
import SelectType from '../components/SelectType'
import SelectSeason from '../components/SelectSeason'
import Spot from '../components/Spot'
import Weather from '../components/Weather'
import '../styles/components/spots.css'

const Spots = ({dataSpots}) => {

    const [selectedKeyWord , setSelectedKeyWord] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedSeason, setSelectedSeason] =useState("");

    const [activeSpot, setActiveSpot] = useState('');
    const [weatherDescription, setWeatherDescription] = useState({
        // current weather
        icon: '00d',
        currentWeatherDescription: '',
        currentTemp: '',
        currentRain: '',
        currentHumidity: '',
        currentWind: '',
        // daily weather
        dailyWeatherDescription: '',
        dailyMinTemp: '',
        dailyMaxTemp: '',
        dailyRain: '',
        dailyHumidity: '',
        dailyWind: '',
        dailySunrise: '',
        dailySunset: '',
        dailyUVi: '',
        // hourly weather
        iconHourPlusZero: '00d',
        iconHourPlusTwo: '00d',
        iconHourPlusFour: '00d',
        iconHourPlusSix: '00d',
        iconHourPlusHeight: '00d',
        iconHourPlusTen: '00d',
        iconHourPlusTwelve: '00d',
        weatherTempPlusZero: '',
        weatherTempPlusTwo: '',
        weatherTempPlusFour: '',
        weatherTempPlusSix: '',
        weatherTempPlusHeight: '',
        weatherTempPlusTen: '',
        weatherTempPlusTwelve: '',
        humidityPlusZero: '',
        humidityPlusTwo: '',
        humidityPlusFour: '',
        humidityPlusSix: '',
        humidityPlusHeight: '',
        humidityPlusTen: '',
        humidityPlusTwelve: '',
        rainPlusZero: '',
        rainPlusTwo: '',
        rainPlusFour: '',
        rainPlusSix: '',
        rainPlusHeight: '',
        rainPlusTen: '',
        rainPlusTwelve: '',
        // daily weather
        iconDayPlusOne: '00d',
        iconDayPlusTwo: '00d',
        iconDayPlusThree: '00d',
        iconDayPlusFour: '00d',
        iconDayPlusFive: '00d',
        iconDayPlusSix: '00d',
        iconDayPlusSeven: '00d',
        weatherMinTempPlusOneDay: '',
        weatherMaxTempPlusOneDay: '',
        weatherMinTempPlusTwoDays: '',
        weatherMaxTempPlusTwoDays: '',
        weatherMinTempPlusThreeDays: '',
        weatherMaxTempPlusThreeDays: '',
        weatherMinTempPlusFourDays: '',
        weatherMaxTempPlusFourDays: '',
        weatherMinTempPlusFiveDays: '',
        weatherMaxTempPlusFiveDays: '',
        weatherMinTempPlusSixDays: '',
        weatherMaxTempPlusSixDays: '',
        weatherMinTempPlusSevenDays: '',
        weatherMaxTempPlusSevenDays: '',
        humidityPlusOneDay: '',
        humidityPlusTwoDays: '',
        humidityPlusThreeDays: '',
        humidityPlusFourDays: '',
        humidityPlusFiveDays: '',
        humidityPlusSixDays: '',
        humidityPlusSevenDays: '',
        rainPlusOneDay: '',
        rainPlusTwoDays: '',
        rainPlusThreeDays: '',
        rainPlusFourDays: '',
        rainPlusFiveDays: '',
        rainPlusSixDays: '',
        rainPlusSevenDays: ''
    });

    const CLEFAPI = "";    
    let resultatsAPI;

    const onChangeKeyWord = (event) => {
        setSelectedKeyWord(event.target.value);
    };

    const handleChangeRegion = (event) => {
        setSelectedRegion(event.target.value)
    };

    const handleChangeType = (event) => {
        setSelectedType(event.target.value);
    };

    const handleChangeSeason = (event) => {
        setSelectedSeason(event.target.value);
    };

    const handleCallWeatherAPI = (latitude, longitude) => {
        weatherAPI(latitude, longitude);
    }

    const weatherAPI = async (lat, long) => {
        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEFAPI}`)
        .then((res) => res.json())
        .then((data) => {
            resultatsAPI = data;
            console.log(resultatsAPI);
            setWeatherDescription({
                // current weather
                icon: resultatsAPI.current.weather[0].icon,
                currentWeatherDescription: resultatsAPI.current.weather[0].description, 
                currentTemp: Math.round(resultatsAPI.current.temp),
                currentRain: resultatsAPI.current.rain,
                currentHumidity: resultatsAPI.current.humidity,
                currentWind: resultatsAPI.current.wind_speed,
                // daily weather
                dailyWeatherDescription: resultatsAPI.daily[0].weather[0].description,
                dailyMinTemp: Math.round(resultatsAPI.daily[0].temp.min),
                dailyMaxTemp: Math.round(resultatsAPI.daily[0].temp.max),
                dailyRain: resultatsAPI.daily[0].rain,
                dailyHumidity: resultatsAPI.daily[0].humidity,
                dailyWind: resultatsAPI.daily[0].wind_speed,
                dailySunrise: resultatsAPI.daily[0].sunrise,
                dailySunset: resultatsAPI.daily[0].sunset,
                dailyUVi: resultatsAPI.daily[0].uvi,
                // hourly weather
                iconHourPlusZero: resultatsAPI.hourly[0].weather[0].icon,
                iconHourPlusTwo: resultatsAPI.hourly[2].weather[0].icon,
                iconHourPlusFour: resultatsAPI.hourly[4].weather[0].icon,
                iconHourPlusSix: resultatsAPI.hourly[6].weather[0].icon,
                iconHourPlusHeight: resultatsAPI.hourly[8].weather[0].icon,
                iconHourPlusTen: resultatsAPI.hourly[10].weather[0].icon,
                iconHourPlusTwelve: resultatsAPI.hourly[12].weather[0].icon,
                weatherTempPlusZero: Math.round(resultatsAPI.hourly[0].temp),
                weatherTempPlusTwo: Math.round(resultatsAPI.hourly[2].temp),
                weatherTempPlusFour: Math.round(resultatsAPI.hourly[4].temp),
                weatherTempPlusSix: Math.round(resultatsAPI.hourly[6].temp),
                weatherTempPlusHeight: Math.round(resultatsAPI.hourly[8].temp),
                weatherTempPlusTen: Math.round(resultatsAPI.hourly[10].temp),
                weatherTempPlusTwelve: Math.round(resultatsAPI.hourly[12].temp),
                humidityPlusZero: resultatsAPI.hourly[0].humidity,
                humidityPlusTwo: resultatsAPI.hourly[2].humidity,
                humidityPlusFour: resultatsAPI.hourly[4].humidity,
                humidityPlusSix: resultatsAPI.hourly[6].humidity,
                humidityPlusHeight: resultatsAPI.hourly[8].humidity,
                humidityPlusTen: resultatsAPI.hourly[10].humidity,
                humidityPlusTwelve: resultatsAPI.hourly[12].humidity,
                rainPlusZero: resultatsAPI.hourly[0].rain,
                rainPlusTwo: resultatsAPI.hourly[2].rain,
                rainPlusFour: resultatsAPI.hourly[4].rain,
                rainPlusSix: resultatsAPI.hourly[6].rain,
                rainPlusHeight: resultatsAPI.hourly[8].rain,
                rainPlusTen: resultatsAPI.hourly[10].rain,
                rainPlusTwelve: resultatsAPI.hourly[12].rain,
                // daily weather
                iconDayPlusOne: resultatsAPI.daily[1].weather[0].icon,
                iconDayPlusTwo: resultatsAPI.daily[2].weather[0].icon,
                iconDayPlusThree: resultatsAPI.daily[3].weather[0].icon,
                iconDayPlusFour: resultatsAPI.daily[4].weather[0].icon,
                iconDayPlusFive: resultatsAPI.daily[5].weather[0].icon,
                iconDayPlusSix: resultatsAPI.daily[6].weather[0].icon,
                iconDayPlusSeven: resultatsAPI.daily[7].weather[0].icon,
                weatherMinTempPlusOneDay: Math.round(resultatsAPI.daily[1].temp.min),
                weatherMaxTempPlusOneDay: Math.round(resultatsAPI.daily[1].temp.max),
                weatherMinTempPlusTwoDays: Math.round(resultatsAPI.daily[2].temp.min),
                weatherMaxTempPlusTwoDays: Math.round(resultatsAPI.daily[2].temp.max),
                weatherMinTempPlusThreeDays: Math.round(resultatsAPI.daily[3].temp.min),
                weatherMaxTempPlusThreeDays: Math.round(resultatsAPI.daily[3].temp.max),
                weatherMinTempPlusFourDays: Math.round(resultatsAPI.daily[4].temp.min),
                weatherMaxTempPlusFourDays: Math.round(resultatsAPI.daily[4].temp.max),
                weatherMinTempPlusFiveDays: Math.round(resultatsAPI.daily[5].temp.min),
                weatherMaxTempPlusFiveDays: Math.round(resultatsAPI.daily[5].temp.max),
                weatherMinTempPlusSixDays: Math.round(resultatsAPI.daily[6].temp.min),
                weatherMaxTempPlusSixDays: Math.round(resultatsAPI.daily[6].temp.max),
                weatherMinTempPlusSevenDays: Math.round(resultatsAPI.daily[7].temp.min),
                weatherMaxTempPlusSevenDays: Math.round(resultatsAPI.daily[7].temp.max),
                humidityPlusOneDay: resultatsAPI.daily[1].humidity,
                humidityPlusTwoDays: resultatsAPI.daily[2].humidity,
                humidityPlusThreeDays: resultatsAPI.daily[3].humidity,
                humidityPlusFourDays: resultatsAPI.daily[4].humidity,
                humidityPlusFiveDays: resultatsAPI.daily[5].humidity,
                humidityPlusSixDays: resultatsAPI.daily[6].humidity,
                humidityPlusSevenDays: resultatsAPI.daily[7].humidity,
                rainPlusOneDay: resultatsAPI.daily[1].rain,
                rainPlusTwoDays: resultatsAPI.daily[2].rain,
                rainPlusThreeDays: resultatsAPI.daily[3].rain,
                rainPlusFourDays: resultatsAPI.daily[4].rain,
                rainPlusFiveDays: resultatsAPI.daily[5].rain,
                rainPlusSixDays: resultatsAPI.daily[6].rain,
                rainPlusSevenDays: resultatsAPI.daily[7].rain,
            });
        });
    }

    return (
        <div className="container">
            <div className='criterias'>
                <SelectByKeyWord selectedKeyWord={selectedKeyWord} onChangeKeyWord={onChangeKeyWord}/>
                <SelectRegion selectedRegion={selectedRegion} handleChangeRegion={handleChangeRegion}/>
                <SelectType selectedType={selectedType} handleChangeType={handleChangeType}/>
                <SelectSeason selectedSeason={selectedSeason} handleChangeSeason={handleChangeSeason}/>
            </div>
            <div className='spots'>
            {dataSpots
                .filter((spot) => (spot.spot.toLowerCase().includes(selectedKeyWord) 
                                    || spot.ville.toLowerCase().includes(selectedKeyWord)))
                .filter((spot) => spot.region.includes(selectedRegion))
                .filter((spot) => spot.type.includes(selectedType))
                .filter((spot) => spot.meilleures_saisons.includes(selectedSeason))
                .map((spot) => (
                <Spot key={spot._id} 
                    spot={spot} 
                    setActiveSpot={setActiveSpot}
                    handleCallWeatherAPI={handleCallWeatherAPI}
                />
                ))
            }
            </div>
            <Weather
                activeSpot={activeSpot}
                weatherDescription={weatherDescription}
                className="weather"
            />
        </div>
    )
}

export default Spots