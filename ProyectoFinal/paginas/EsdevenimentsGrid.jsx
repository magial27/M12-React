import React from 'react'
import './Esdeveniments.css'
import  EsdevenimentGrid  from "./EsdevenimentGrid";
import Esdeveniment from './Esdeveniment';
import { Link } from "react-router-dom";


function EsdevenimentsGrid() {
  const esdeveniments = [
    {id: 1,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_e3N7OX7siNi0BsMnkudlxsZMrJzpA4aXvA&usqp=CAU', nombre: 'TomorrowLand', descripcio:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', preu: 20, data_inici: '17 de Juny', data_final: '23 de Juny', lloc: 'Bèlgica', aforo: 5000000}, 
    {id: 2,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEZkbaA1EgAmi3AxMhqdgBHqOyNkIv_6npw&usqp=CAU', nombre: 'Sonar Festival', descripcio:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', preu: 1, data_inici: '24 de Juliol', data_final: '30 de Juliol', lloc: 'Barcelona', aforo: 30000}, 
    {id: 3,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIo1o2lXXYhoKw4mUUnsgX0ND2MvUIZ6f9FA&usqp=CAU', nombre: 'Love Festival', descripcio:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', preu: 1, data_inici: '15 de Septembre', data_final: '20 de Septembre', lloc: 'Barcelona', aforo: 90000}, 

  ];

  return (
    <div className='pagina-eventos'>
        <div className='evento-flex'>
          {esdeveniments.map((esdeveniment) => (
            <>
              <EsdevenimentGrid key={esdeveniment.id} esdeveniment={esdeveniment}/>
            </>
         ))}
        </div>
    </div>
  )
}

export default EsdevenimentsGrid