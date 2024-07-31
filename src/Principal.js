import React from 'react'
import Menu from './Menu'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import App from './App'
import Localizacion from './componentes/Localizacion'
import Episodio from './componentes/Episodio'
import PagNF from './componentes/PagNF'

const Principal = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/app' element={<App />} />
                <Route path='/episodio' element={<Episodio />} />
                <Route path='/localizacion' element={<Localizacion />} />
                <Route path='*' element={<PagNF />} />
            </Routes>
        </BrowserRouter>


    )
}

export default Principal