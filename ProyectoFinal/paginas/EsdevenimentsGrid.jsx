import React from 'react'
import './Esdeveniments.css'
import  EsdevenimentGrid  from "./EsdevenimentGrid";
import { Link } from "react-router-dom";


function EsdevenimentsGrid() {
  const esdeveniments = [
    {id: 1, nombre: 'Esdeveniment 1', descripcio:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', preu: 20, data_inici: 21-12-2023, data_final: 28-12-2023, lloc: 'Vilanova i la Geltrú', aforo: 5000}, 
    {id: 2, nombre: 'Esdeveniment 2', descripcio:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', preu: 1, data_inici: 21-12-2023, data_final: 28-12-2023, lloc: 'Sitges', aforo: 300}, 
    {id: 3, nombre: 'Esdeveniment 2', descripcio:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', preu: 1, data_inici: 21-12-2023, data_final: 28-12-2023, lloc: 'Sitges', aforo: 300}, 

  ];

  return (
    <div className='pagina-eventos'>
        <div className='evento-flex'>
          {esdeveniments.map((esdeveniment) => (
            <EsdevenimentGrid key={esdeveniment.id} esdeveniment={esdeveniment}/>
          ))}
        </div>
    </div>
  )
}

export default EsdevenimentsGrid