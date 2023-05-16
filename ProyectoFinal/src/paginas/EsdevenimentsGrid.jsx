import React, { useState, useEffect } from 'react';
import './Esdeveniments.css';
import EsdevenimentGrid from './EsdevenimentGrid';
import Esdeveniment from './Esdeveniment';

function EsdevenimentsGrid() {
  const [esdeveniments, setEsdeveniments] = useState([]);

  const getEvents = async (e) => {
    try {

      const data = await fetch("http://127.0.0.1:8000/api/events", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer ',

        },
        method: "GET",
    })
      const resposta = await data.json();
      console.log(resposta);
      if (resposta.success == true )
      {
        setEsdeveniments(resposta.data);
        // setAuthToken(authToken);  
        console.log(esdeveniments); 

       
      }else{
        console.log("La resposta no ha triomfat");

      }            
      
    } catch {
      console.log("Error");
      console.log("catch");
    }
  };

  useEffect(()=>{
    getEvents();
}, [])

  return (
    <div className='pagina-eventos'>
      <div className='evento-flex'>
        {esdeveniments.map((esdeveniment) => (
          <EsdevenimentGrid key={esdeveniment.id} esdeveniment={esdeveniment} />
        ))}
      </div>
    </div>
  );
}

export default EsdevenimentsGrid;
