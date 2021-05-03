import React, { useState } from 'react'
import Spot from '../components/Spot'
import '../styles/components/spots.css'

const Spots = ({dataSpots}) => {

    const [searchTerm, setSearchTerme] = useState(''); 
    const [selectedRegionCheckboxes, setSelectedRegionCheckboxes] = useState('');
    const [selectedSeasonRadio , setSelectedSeasonRadio] = useState('');
    const regionsCheckboxes = ['Alsace', 'Bourgogne', 'Franche Comté', 'Midi Pyrénées', `Provence Alpes Cote d'Azur`, 'Rhone Alpes'];
    const seasonRadio = ['Printemps', 'Été', 'Automne', 'Hiver'];

    return (
        <div className='spots'>
            <ul className='checkboxes'>
                <li>
                    <input type="text" id='search' placeholder='recheche' value={searchTerm} autoComplete='off' onChange={(e) => setSearchTerme(e.target.value)}/>
                </li>
                <li>{searchTerm && (
                    <button onClick={() => 
                                        setSearchTerme("")

                                    }>Effacer</button>
                )}</li>
            </ul>
            <ul className='checkboxes'>
                {regionsCheckboxes.map((checkbox) => {
                    return(
                        <li key={checkbox}>
                            <input type="checkbox" 
                                    value={checkbox} 
                                    id={checkbox} 
                                    checked={checkbox===selectedRegionCheckboxes}
                                    onChange={(e) => setSelectedRegionCheckboxes(e.target.value)}
                            />
                            <label htmlFor="checkbox">{checkbox}</label>
                        </li>
                    )
                })}
                <li><button onClick={() => setSelectedRegionCheckboxes("")}>{selectedRegionCheckboxes ? 'Annuler filtre' : ''}</button></li>
                <li>{selectedRegionCheckboxes && (
                    <button onClick={() => setSelectedRegionCheckboxes("")}>Annuler filtre</button>
                )}</li>
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
                    <button onClick={() => setSelectedSeasonRadio("")}>Annuler filtre</button>
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
                .filter((spot) => (spot.region.includes(selectedRegionCheckboxes)))
                .filter((spot) => (spot.meilleures_saisons.includes(selectedSeasonRadio)))
                .map((spot) => (
                <Spot key={spot._id} spot={spot}/>
                ))
            }
        </div>
    )
}

export default Spots