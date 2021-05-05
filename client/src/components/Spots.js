import React, { useState } from 'react'
import Spot from '../components/Spot'
import { TextField, Button } from '@material-ui/core'
import '../styles/components/spots.css'

const Spots = ({dataSpots}) => {

    const [searchTerm, setSearchTerme] = useState(''); 
    const [selectedRegionRadio, setSelectedRegionRadio] = useState('');
    const [selectedSeasonRadio , setSelectedSeasonRadio] = useState('');
    const regionsRadio = ['Alsace', 'Bourgogne', 'Franche Comté', 'Midi Pyrénées', `Provence Alpes Cote d'Azur`, 'Rhone Alpes'];
    const seasonRadio = ['Printemps', 'Été', 'Automne', 'Hiver'];

    return (
        <div className='spots'>
            <ul className='checkboxes'>
                <li>
                    <TextField 
                        id="outlined-basic" 
                        placeholder='Recherchez un mot clé' 
                        autoComplete='off'
                        variant="outlined" 
                        label={searchTerm} 
                        onChange={(e) => setSearchTerme(e.target.value)}
                    />
                </li>
            </ul>
            <ul className='checkboxes'>
                {regionsRadio.map((checkbox) => {
                    return(
                        <li key={checkbox}>
                            <input type="radio" 
                                    value={checkbox} 
                                    id={checkbox} 
                                    checked={checkbox===selectedRegionRadio}
                                    onChange={(e) => setSelectedRegionRadio(e.target.value)}
                            />
                            <label htmlFor="checkbox">{checkbox}</label>
                        </li>
                    )
                })}
                <li>{selectedRegionRadio && (
                        <Button variant="outlined" color="secondary" onClick={() => setSelectedRegionRadio("")}>
                            Supprimer filtre
                        </Button>
                    )}
                </li>
            </ul>
            <ul className='checkboxes'>
                {seasonRadio.map((radio) => {
                    return(
                        <li key={radio}>
                            <input type="radio"
                                    value={radio}
                                    id={radio}
                                    checked={radio===selectedSeasonRadio}
                                    onChange={(e) => setSelectedSeasonRadio(e.target.value)}
                            />
                            <label htmlFor="radio">{radio}</label>
                        </li>
                    )
                })}
                <li>{selectedSeasonRadio && (
                    <Button variant="outlined" color="secondary" onClick={() => setSelectedSeasonRadio("")}>
                            Supprimer filtre
                    </Button>
                )}</li>
            </ul>
            {dataSpots
                .filter((spot) => (spot.spot.toLowerCase().includes(searchTerm)
                                    || spot.region.toLowerCase().includes(searchTerm)
                                    || spot.departement.toLowerCase().includes(searchTerm)
                                    || spot.ville.toLowerCase().includes(searchTerm)
                                    || spot.hauteur.toLowerCase().includes(searchTerm)
                                    || spot.meilleures_saisons.toLowerCase().includes(searchTerm)
                                    || spot.approche.toLowerCase().includes(searchTerm)
                                    || spot.orientation.toLowerCase().includes(searchTerm)
                                    || spot.type.toLowerCase().includes(searchTerm)))
                .filter((spot) => (spot.region.includes(selectedRegionRadio)))
                .filter((spot) => (spot.meilleures_saisons.includes(selectedSeasonRadio)))
                .map((spot) => (
                <Spot key={spot._id} spot={spot}/>
                ))
            }
        </div>
    )
}

export default Spots