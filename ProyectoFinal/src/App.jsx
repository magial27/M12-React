import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/layout/Header'
import { Home } from './components/layout/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import Esdeveniment from './paginas/Esdeveniment'
import UserForm from "./components/layout/UserForm"

import Artista from './paginas/Artista'
import EsdevenimentsGrid from './paginas/EsdevenimentsGrid'
import { Route, Routes } from 'react-router-dom'

import "@stripe/stripe-js";

import { UserContext } from "./userContext";
import SobreNosotros from './paginas/SobreNosotros'
import Contact from './paginas/Contact'
import Canciones from './paginas/Canciones'

import { NotFound } from './components/aplicacio/NotFound'

function App() {
  const [count, setCount] = useState(0)

  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");

  return (
    <>

      <UserContext.Provider
        value={{ usuari, setUsuari, authToken, setAuthToken }}
      >
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/*" element={<><Header /><NotFound /></>} />

          <Route path="/esdeveniments" element={<><Header /><EsdevenimentsGrid /></>} />
          <Route path="/login" element={<><Header /><Login /></>} />
          <Route path="/register" element={<><Header /><Register /></>} />
          <Route path="/user" element={<><Header /><UserForm /></>} />

          <Route path="/esdeveniments/:id" element={<><Header /><Esdeveniment /></>} />
          <Route path="/artistes" element={<><Header /><Artista /></>} />
          <Route path="/canciones" element={<><Header /><Canciones /></>} />

          <Route path="/nosaltres" element={<><Header /><SobreNosotros /></>} />
          <Route path="/contacta" element={<><Header /><Contact /></>} />

        </Routes>

      </UserContext.Provider>

    </>
  )
}

export default App
