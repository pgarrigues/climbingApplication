import React from 'react'
import '../styles/components/spot.css'

const Spot = ({spot}) => {
    return (
        <div className='spot'>
            <h1 className='titleSpot'>{spot.spot}</h1>
            <p>{spot.region}</p>
            <p>{spot.departement}</p>
            <p>{spot.ville}</p>
            <p>Meilleures saisons : {spot.meilleures_saisons}</p>
        </div>
    )
}

export default Spot
