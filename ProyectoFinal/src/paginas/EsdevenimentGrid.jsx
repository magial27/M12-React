import React, { useEffect, useState } from 'react'
import './Esdeveniments.css'
import { Link } from "react-router-dom";

function EsdevenimentGrid({ esdeveniment }) {

  const [imageExists, setImageExists] = useState(false);

  const authToken = localStorage.getItem('authToken'); // Verificamos si el usuario está autenticado


  function checkImageExists(imageUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imageUrl;
    });
  }



  useEffect(() => {
    checkImageExists(esdeveniment.filepath)
      .then(exists => setImageExists(exists));
  }, [esdeveniment.filepath]);

  return (

    <div class="full clearfix">
      <div class="m-eventList m-eventList__list event_list">
        <div class="m-eventList__wrapper list" id="list">
          <div class="m-eventItem featured clearfix">
            <div className="m-eventItem__thumb thumb">
              <a href={`/esdeveniments/${esdeveniment.id}`} title="More Info">
                {imageExists ? (
                  <img src={esdeveniment.filepath} alt="Event" />
                ) : (
                  <img
                    src="https://ined21.com/wp-content/uploads/2020/11/Eventos-musicales.jpg"
                    alt="Alternative Event"
                  />
                )}
              </a>
            </div>


            <div class="m-eventItem__info info clearfix">
              <div class="m-eventItem__date date">
                <span class="m-date__rangeFirst"><span class="m-date__month">{esdeveniment.start_date} - {esdeveniment.end_date}</span></span>
              </div>
              <h3 class="m-eventItem__title m-eventItem__title-withTagline">
                <a href={`/esdeveniments/${esdeveniment.id}`} title="More Info">{esdeveniment.name}</a>
              </h3>
              <h4 class="m-eventItem__tagline"> Aforament : {esdeveniment.capacity}</h4>
            </div>
            <div class="event-item-meta-data"> {esdeveniment.location} </div>

            <div class="m-eventItem__buttons show-list">

              <a target="_blank" href={esdeveniment.stripe} class="tickets onsalenow ">Buy Tickets</a><Link class="more m-eventItem__buttons-hide" to={"/esdeveniments/" + esdeveniment.id}>More Info</Link>
            </div>



            {authToken && (
              <div class="m-eventItem__buttons show-list">

              <a target="_blank" href={esdeveniment.stripe} class="tickets onsalenow ">Buy Tickets</a><Link class="more m-eventItem__buttons-hide" to={"/esdeveniments/" + esdeveniment.id}>More Info</Link>
            </div>
            )}

            {!authToken && (
              <div class="m-eventItem__buttons show-list">

              <Link to="/login" class="tickets onsalenow ">Buy Tickets</Link><Link class="more m-eventItem__buttons-hide" to={"/esdeveniments/" + esdeveniment.id}>More Info</Link>
            </div>
            )}
          </div>

        </div>
      </div>
    </div>


  )
}

export default EsdevenimentGrid