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
                                <img src={esdeveniment.filepath}/> 
                            </a>
                        </div>

                        <div class="m-eventItem__info info clearfix">
                            <div class="m-eventItem__date date">
                                <span class="m-date__rangeFirst"><span class="m-date__month">{esdeveniment.start_date} - {esdeveniment.end_date}</span></span>
                            </div>
                            <h3 class="m-eventItem__title m-eventItem__title-withTagline">
                                <a href="#" title="More Info">{esdeveniment.name}</a>
                            </h3>
                            <h4 class="m-eventItem__tagline"> Aforament : {esdeveniment.capacity}</h4>
                        </div>
                        <div class="event-item-meta-data"> {esdeveniment.location} </div>

                        <div class="m-eventItem__buttons show-list">

                            <a target="_blank" class="tickets onsalenow ">Buy Tickets</a><Link  class="more m-eventItem__buttons-hide" to={"/esdeveniments/" + esdeveniment.id}>More Info</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
















                    )
}

                    export default EsdevenimentGrid