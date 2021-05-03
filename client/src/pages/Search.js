import React, { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import Spots from '../components/Spots'
import '../styles/pages/search.css'

import axios from 'axios'

const Search = () => {

    const [dataSpots, setDataSpots] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:5000/spots')
        .then((res) => setDataSpots(res.data))
        .then(console.log('chargement data'))
    }, [])

    return (
        <div className='searchPage'>
            <Navigation/>
            <Spots dataSpots={dataSpots}/>
        </div>
    )
}

export default Search