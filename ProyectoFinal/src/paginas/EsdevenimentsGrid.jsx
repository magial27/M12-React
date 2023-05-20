import React, { useState, useEffect } from 'react';
import './Esdeveniments.css';
import EsdevenimentGrid from './EsdevenimentGrid';
import Esdeveniment from './Esdeveniment';

function EsdevenimentsGrid() {
  const [esdeveniments, setEsdeveniments] = useState([]);
  const [refreshCount, setRefreshCount] = useState(0);

  const reloadEvents = () => {
    getEvents();
    setRefreshCount(refreshCount + 1);
  };

  const [totalPages, setTotalPages] = useState(0);


  const [currentPage, setCurrentPage] = useState(1);

  const EVENTS_PER_PAGE = 2;

  const paginateEvents = () => {
    console.log(currentPage); // Verificar el valor de currentPage
    const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
    const endIndex = startIndex + EVENTS_PER_PAGE;
    return esdeveniments.slice(startIndex, endIndex);
  };


  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    console.log(currentPage); // Verificar el valor de currentPage
  };


  console.log(totalPages); // Verificar el valor de totalPages
  console.log(currentPage); // Verificar el valor de currentPage

  const getEvents = async () => {
    try {
      const data = await fetch("http://equip12.insjoaquimmir.cat/api/events", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer ',
        },
        method: "GET",
      });
      const resposta = await data.json();
      if (resposta.success) {
        setEsdeveniments(resposta.data);
        const totalPages = Math.ceil(resposta.data.length / EVENTS_PER_PAGE);
        setTotalPages(totalPages); // Establecer el valor de totalPages
        console.log(totalPages);
      } else {
        console.log("La resposta no ha triomfat");
      }
    } catch {
      console.log("Error");
    }
  };



  useEffect(() => {
    getEvents();
    const interval = setInterval(() => {
      reloadEvents();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(esdeveniments.length / EVENTS_PER_PAGE));
  }, [esdeveniments]);




  return (
    <>
      <div className='pagina-eventos'>
        <div className='evento-flex'>
          {/* {esdeveniments.map((esdeveniment) => (
          <EsdevenimentGrid key={esdeveniment.id} esdeveniment={esdeveniment} />
          
        ))} */}

          {/* {esdeveniments.map((esdeveniment) => (
        <EsdevenimentGrid key={esdeveniment.id} esdeveniment={esdeveniment} refreshCount={refreshCount} />
      ))} */}

          {paginateEvents().map((esdeveniment) => (
            <EsdevenimentGrid key={esdeveniment.id} esdeveniment={esdeveniment} refreshCount={refreshCount} />
          ))}



          <div>
            {/* Renderizar el botón "Anterior" solo si no estamos en la primera página */}
            {currentPage > 1 && (
              <button onClick={goToPreviousPage}>Anterior</button>
            )}

            {/* Renderizar el botón "Siguiente" solo si no estamos en la última página */}

            {currentPage < totalPages && (
              <button onClick={goToNextPage}>Siguiente</button>
            )}

          </div>

        </div>


      </div>


    </>

  );
}

export default EsdevenimentsGrid;
