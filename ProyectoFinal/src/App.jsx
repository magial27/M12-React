import { useState } from 'react'
import './App.css'
import { Header } from '../components/layout/Header'
import { Home } from '../components/layout/Home'
import Login from '../components/layout/Login'
import Register from '../components/layout/Register'
import Esdeveniment from '../paginas/Esdeveniment'

import EsdevenimentsGrid from '../paginas/EsdevenimentsGrid'
import { Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        {/* <Route path="/places/list" element={ <><PlacesMenu/><PlacesList /></> } />  */}
        <Route path="/" element={ <><Header/><Home /></> } /> 
        <Route path="/*" element={ <><Header/></> } /> 

        <Route path="/esdeveniments" element={ <><Header/><EsdevenimentsGrid /></> } /> 
        <Route path="/login" element={ <><Header/><Login /></> } /> 
        <Route path="/register" element={ <><Header/><Register /></> } /> 
        <Route path="/esdeveniment/:id" element={ <><Header/><Esdeveniment /></> } /> 











      </Routes>

    </>
  )
}

export default App
