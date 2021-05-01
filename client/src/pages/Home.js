import React from 'react'
import Navigation from '../components/Navigation'
import Map from '../components/Map'
import '../styles/pages/home.css'

const Home = () => {
    return (
        <div className='homePage'>
            <Navigation/>
            <Map/>
        </div>
    )
}

export default Home
