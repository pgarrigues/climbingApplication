import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({dataSpots, setActiveSpot, handleCallWeatherAPI}) => {
    return (
        <div>
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
                            click: () => {
                                handleCallWeatherAPI(spot.latitude, spot.longitude);
                                setActiveSpot(spot);
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
        </div>
    )
}

export default Map
