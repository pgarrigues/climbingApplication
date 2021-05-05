import React from 'react'
import Navigation from '../components/Navigation'
import Spots from '../components/Spots'
import '../styles/pages/search.css'

const Search = ({dataSpots}) => {

    return (
        <div className='searchPage'>
            <Navigation/>
            <Spots dataSpots={dataSpots}/>
        </div>
    )
}

export default Search