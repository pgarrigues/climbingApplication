import React from 'react'
import Navigation from '../components/Navigation'
import Map from '../components/Map'
import '../styles/pages/home.css'

const Home = ({dataSpots}) => {

    console.log(dataSpots)

    return (
        <div className='homePage'>
            <Navigation/>
            <Map dataSpots={dataSpots}/>
        </div>
    )
}

export default Home
