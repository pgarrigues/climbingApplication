import React, { useState } from 'react'
import SelectByKeyWord from '../components/SelectByKeyWord'
import SelectRegion from '../components/SelectRegion'
import SelectType from '../components/SelectType'
import SelectSeason from '../components/SelectSeason'
import Spot from '../components/Spot'
import '../styles/components/spots.css'

const Spots = ({dataSpots}) => {

    const [selectedKeyWord , setSelectedKeyWord] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedSeason, setSelectedSeason] =useState("");

    const CLEFAPI = "...";
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
                <Spot key={spot._id} spot={spot} handleCallWeatherAPI={handleCallWeatherAPI}/>
                ))
            }
            </div>
            <div className="weather">
                <p className='hello'>
                    Hello météo
                </p>
            </div>
        </div>
    )
}

export default Spots