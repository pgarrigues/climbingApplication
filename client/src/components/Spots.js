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
    const [info, setInfo] = useState('Aucun spot sélectionné');
    const [infoWeatherDescription, setInfoWeatherDescription] = useState('');
    const [icon, setIcon] = useState('01d');
    const [infoTemperature, setInfoTemperature] = useState('');
    const [infoHumidity, setInfoHumidity] = useState('');
    const [infoWindSpeed, setInfoWindSpeed] = useState('');
    const [minDayOne, setMinDayOne] = useState(0);
    const [minDayTwo, setMinDayTwo] = useState(0);
    const [minDayThree, setMinDayThree] = useState(0);
    const [minDayFour, setMinDayFour] = useState(0);
    const [minDayFive, setMinDayFive] = useState(0);
    const [maxDayOne, setMaxDayOne] = useState(0);
    const [maxDayTwo, setMaxDayTwo] = useState(0);
    const [maxDayThree, setMaxDayThree] = useState(0);
    const [maxDayFour, setMaxDayFour] = useState(0);
    const [maxDayFive, setMaxDayFive] = useState(0);

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

    const weatherAPI = async (lat, long) => {
        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEFAPI}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            resultatsAPI = data;
            console.log(resultatsAPI);
            setInfoWeatherDescription(resultatsAPI.current.weather[0].description);
            setIcon(resultatsAPI.current.weather[0].icon);
            setInfoTemperature(Math.round(resultatsAPI.current.temp));
            setInfoHumidity(resultatsAPI.current.humidity);
            setInfoWindSpeed(resultatsAPI.current.wind_speed);
            setMinDayOne(resultatsAPI.daily[1].temp.min);
            setMinDayTwo(resultatsAPI.daily[2].temp.min);
            setMinDayThree(resultatsAPI.daily[3].temp.min);
            setMinDayFour(resultatsAPI.daily[4].temp.min);
            setMinDayFive(resultatsAPI.daily[5].temp.min);
            setMaxDayOne(resultatsAPI.daily[1].temp.max);
            setMaxDayTwo(resultatsAPI.daily[2].temp.max);
            setMaxDayThree(resultatsAPI.daily[3].temp.max);
            setMaxDayFour(resultatsAPI.daily[4].temp.max);
            setMaxDayFive(resultatsAPI.daily[5].temp.max);
        });
    }

    const handleCallWeatherAPI = (latitude, longitude) => {
        weatherAPI(latitude, longitude);
    }

    return (
        <div className="container">
            <div className='criterias'>
                <SelectByKeyWord onChangeKeyWord={onChangeKeyWord}/>
                <SelectRegion selectedRegion={selectedRegion} handleChangeRegion={handleChangeRegion}/>
                <SelectType selectedType={selectedType} handleChangeType={handleChangeType}/>
                <SelectSeason selectedSeason={selectedSeason} handleChangeSeason={handleChangeSeason}/>
            </div>
            <div className='spots'>
            {dataSpots
                .filter((spot) => (spot.spot.toLowerCase().includes(selectedKeyWord) 
                                    || spot.ville.toLowerCase().includes(selectedKeyWord)))
                .filter((spot) => spot.region.includes(selectedRegion))
                .filter((spot) => (spot.type.includes(selectedType)))
                .filter((spot) => spot.meilleures_saisons.includes(selectedSeason))
                .map((spot) => (
                <Spot key={spot._id} spot={spot} handleCallWeatherAPI={handleCallWeatherAPI} setActiveSpot={setActiveSpot} setInfo={setInfo}/>
                ))
            }
            </div>
            <Weather className="weather"
                info={info}
                activeSpot={activeSpot}
                infoWeatherDescription={infoWeatherDescription}                    
                infoTemperature={infoTemperature}
                infoHumidity={infoHumidity}
                infoWindSpeed={infoWindSpeed}
                minDayOne={minDayOne}
                minDayTwo={minDayTwo}
                minDayThree={minDayThree}
                minDayFour={minDayFour}
                minDayFive={minDayFive}
                maxDayOne={maxDayOne}
                maxDayTwo={maxDayTwo}
                maxDayThree={maxDayThree}
                maxDayFour={maxDayFour}
                maxDayFive={maxDayFive}
                icon={icon}
            />
        </div>
    )
}

export default Spots