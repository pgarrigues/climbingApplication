import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/navigation.css'

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact to='/' activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to='/recherche' activeClassName="nav-active">
                Recherche
            </NavLink>
        </div>
    )
}

export default Navigation
