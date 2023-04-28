import React from 'react'
import './Esdeveniments.css'
import { Link } from "react-router-dom";

function EsdevenimentGrid({ esdeveniment }) {


    return (
        // <Link  to={"/esdeveniment/" + esdeveniment.id}>
        <div className='evento-individual'>
            {/* <p>{esdeveniment.id}</p> */}
            <img src="./fotos/festival.jpg" className='foto_esdeveniment' alt="Foto esdeveniment" />
            <div className="div-info-eve">
                <p>{esdeveniment.nombre}</p>
                <p>{esdeveniment.data_inici}</p>
                <p>{esdeveniment.data_final}</p>
                <p>{esdeveniment.lloc}</p>
            </div>
        </div>

    )
}

export default EsdevenimentGrid