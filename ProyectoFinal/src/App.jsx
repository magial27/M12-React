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

// import Checkout from "./Checkout";
// import Success from "./Success";
// import Cancel from "./Cancel";

import { UserContext } from "./userContext";
import SobreNosotros from './paginas/SobreNosotros'

function App() {
  const [count, setCount] = useState(0)

  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");

  // useEffect(() => {
  //   window.process = {
  //     ...window.process,
  //   };
  // }, []);

  return (
    <>

<UserContext.Provider
        value={{  usuari, setUsuari,authToken, setAuthToken }}
        // { authToken, setAuthToken } equival a  { authToken: authToken, setAuthToken:setAuthToken}
      >
      <Routes>
        {/* <Route path="/places/list" element={ <><PlacesMenu/><PlacesList /></> } />  */}
        <Route path="/" element={ <><Header/><Home /></> } /> 
        <Route path="/*" element={ <><Header/></> } /> 

        <Route path="/esdeveniments" element={ <><Header/><EsdevenimentsGrid /></> } /> 
        <Route path="/login" element={ <><Header/><Login /></> } /> 
        <Route path="/register" element={ <><Header/><Register /></> } /> 
        <Route path="/user" element={ <><Header/><UserForm /></> } /> 

        <Route path="/esdeveniments/:id" element={ <><Header/><Esdeveniment /></> } /> 
        <Route path="/artistes" element={ <><Header/><Artista /></> } /> 
        <Route path="/nosaltres" element={ <><Header/><SobreNosotros /></> } /> 


        {/* <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} /> */}


      </Routes>

    </UserContext.Provider>

    </>
  )
}

export default App
