import React from 'react'
import Navigation from '../components/Navigation'
import HomeBody from '../components/HomeBody'
import '../styles/pages/home.css'

const Home = ({dataSpots}) => {

    return (
        <div className='homePage'>
            <Navigation/>
            <HomeBody dataSpots={dataSpots}/>
        </div>
    )
}

export default Home
