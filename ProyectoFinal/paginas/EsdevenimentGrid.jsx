import React from 'react'
import './Esdeveniments.css'
import { Link } from "react-router-dom";

function EsdevenimentGrid({ esdeveniment }) {


    return (

        <div class="full clearfix">
            <div class="m-eventList m-eventList__list event_list">
                <div class="m-eventList__wrapper list" id="list">
                    <div class="m-eventItem featured clearfix">
                        <div class="m-eventItem__thumb thumb">
                            <a href="#" title="More Info">
                                <img src={esdeveniment.image}/> 
                            </a>
                        </div>

                        <div class="m-eventItem__info info clearfix">
                            <div class="m-eventItem__date date">
                                <span class="m-date__rangeFirst"><span class="m-date__month">{esdeveniment.data_inici} - {esdeveniment.data_final}</span></span>
                            </div>
                            <h3 class="m-eventItem__title m-eventItem__title-withTagline">
                                <a href="#" title="More Info">{esdeveniment.nombre}</a>
                            </h3>
                            <h4 class="m-eventItem__tagline"> Aforament : {esdeveniment.aforo}</h4>
                        </div>
                        <div class="event-item-meta-data"> {esdeveniment.lloc} </div>

                        <div class="m-eventItem__buttons show-list">

                            <a target="_blank" class="tickets onsalenow ">Buy Tickets</a><a class="more m-eventItem__buttons-hide" title="More Info"><Link  class="more m-eventItem__buttons-hide" to={"/esdeveniment/" + esdeveniment.id}>More Info</Link></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
















                    )
}

                    export default EsdevenimentGrid