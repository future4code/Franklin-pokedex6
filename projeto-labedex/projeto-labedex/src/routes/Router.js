import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pokemon from '../pages/Pokemons/Pokemons'
import Pokedex from '../pages/Pokedex/Pokedex'
import Header from '../components/Header/Header'
import Labedex from '../pages/Labedex/Labedex'
import Details from '../pages/Details'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Pokemon />} />
        <Route path='/my-dex' element={<Pokedex />} />
        <Route path='/my-labedex' element={<Labedex />} />
        <Route path='/details/:name' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}
