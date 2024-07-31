import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <nav>
            <NavLink className={({ isActive }) => (isActive ? "activo" : null)} to="/app">Personajes</NavLink>{' '}
            <NavLink className={({ isActive }) => (isActive ? "activo" : null)} to="/episodio">Episodios</NavLink> {' '}
            <NavLink className={({ isActive }) => (isActive ? "activo" : null)} to="/localizacion">Detalles</NavLink>

        </nav>
    )
}

export default Menu