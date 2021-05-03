import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Weather from '../components/Weather'
import '../styles/components/map.css'

import axios from 'axios'

const Map = () => {

    const [dataSpots, setDataSpots] = useState([]);
    const [activeSpot, setActiveSpot] = useState('');
    const [info, setInfo] = useState('Aucun spot sélectionné');
    const [infoWeatherDescription, setInfoWeatherDescription] = useState('');
    const [infoTemperature, setInfoTemperature] = useState('');
    const [infoHumidity, setInfoHumidity] = useState('');
    const [infoWindSpeed, setInfoWindSpeed] = useState('');

    const CLEFAPI = "...";
    
    let resultatsAPI;

    useEffect(() => {
        axios
        .get('http://localhost:5000/spots')
        .then((res) => setDataSpots(res.data))
        .then(console.log('chargement data'))
    }, [])

    const weatherAPI = async (lat, long) =>{
        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEFAPI}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            resultatsAPI = data;
            console.log(resultatsAPI);
            setInfoWeatherDescription(resultatsAPI.current.weather[0].description);
            setInfoTemperature(Math.round(resultatsAPI.current.temp));
            setInfoHumidity(resultatsAPI.current.humidity);
            setInfoWindSpeed(resultatsAPI.current.wind_speed);
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
                                setInfo(spot.spot)
                                // console.log(e);
                                // console.log(spot.spot);
                                weatherAPI(spot.latitude, spot.longitude);
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
                className="weather"
            />
        </div>
    )
}

export default Map
