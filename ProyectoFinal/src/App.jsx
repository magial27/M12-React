import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from '../components/layout/Header'
import { Home } from '../components/layout/Home'

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








      </Routes>

    </>
  )
}

export default App
