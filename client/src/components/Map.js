import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Weather from '../components/Weather'
import '../styles/components/map.css'

const Map = ({dataSpots}) => {

    const [dateNow, setDateNow] = useState('');
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

    const CLEFAPI = "...";
    const CLEFAPI2 = "...";
    
    let resultatsAPI;
    let historicalResults;

    useEffect(()=> {
        const date = () => {
            setDateNow(Math.round((new Date()).getTime() / 1000)-86400);
        }
        date();
    }, []);

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

    const historicalWeatherAPI = async (lat, long, dateNow) => {
        await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&dt=${dateNow}&appid=${CLEFAPI2}`)
        .then((res) => res.json())
        .then((data) => {
            historicalResults = data;
            console.log(historicalResults);
        });
    }

    if (activeSpot !== ''){
        // console.log(info);
        // console.log(activeSpot.spot)
    }

    return (
        <div className="map-container">
            <MapContainer className='map' center={[47.066667, 2.333333]} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {dataSpots.map((spot) => (
                    <Marker
                        key={spot.id}
                        position={[
                            spot.latitude,
                            spot.longitude
                        ]}
                        eventHandlers={{
                            click: (e) => {
                                setActiveSpot(spot);
                                setInfo(spot.spot);
                                // console.log(e);
                                // console.log(spot.spot);
                                weatherAPI(spot.latitude, spot.longitude);
                                historicalWeatherAPI(spot.latitude, spot.longitude, dateNow)
                                // console.log(dataSpots)
                                console.log(dateNow);
                            }
                        }}
                    >
                        <Popup>
                            <h1>{spot.spot}</h1>
                            <h2>{spot.region}, {spot.departement}, {spot.ville}</h2>
                            <br/>
                            <ul>
                                <li><h3>Type : {spot.type}</h3></li>
                                <li><h3>Hauteur : {spot.hauteur}</h3></li>
                                <li><h3>Nombre lignes : {spot.nb_lignes}</h3></li>
                                <li><h3>Cotations : {spot.cotations}</h3></li>
                                <li><h3>Orientation : {spot.orientation}</h3></li>
                                <li><h3>Meilleures saisons : {spot.meilleures_saisons}</h3></li>
                                <li><h3>Approche : {spot.approche}</h3></li>
                            </ul>
                        </Popup>
                    </Marker>
                ))};
            </MapContainer>
            <Weather
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
                className="weather"
            />
        </div>
    )
}

export default Map