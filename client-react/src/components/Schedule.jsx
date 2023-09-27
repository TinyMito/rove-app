export default function Schedule() {
  return (
    <div>
      <title>Vancouver</title>
      <div id="root"></div>

      <h1 className="trip_location">Vancouver</h1>

      <h2>Day: 1 2 3 4 5</h2>
      <h3 className="travel_dates">2023.10.12-2023.10.16</h3>
      <div className="timeline" />

      <section className="itinerary_day">
        <div className="add">
          <a ><i class="bi bi-plus"></i></a>
        </div>

        <div className="place_card_thumbnail">
          <i class="bi bi-record-fill"></i>
          <h3>Fairmont Hotel</h3>

          <section className="time">
            <div>8:00</div>
          </section>
          <i class="bi bi-arrows-fullscreen"></i>
          <img className="place_url" src="https://tinyurl.com/3jskbrps"width="400"/>
          <i class="bi bi-map"></i>
          <i class="bi bi-trash"></i>
        </div>

        <article className="place_card">
          <h3>Stanley Park</h3>

          <section className="time">
            <div className="travel_time_direction">
              <i class="bi bi-car-front"></i>
              <div>10 min </div> 
              <a>Direction</a>
            </div>
            <div>8:10</div>
            <div>10:00</div>
          </section>

          <section>
            <i class="bi bi-arrows-fullscreen"></i>
            <img className="place_url" src="https://tinyurl.com/ta4kmc28"width="400"/>
            <i class="bi bi-map"></i>
            <i class="bi bi-trash"></i>
          </section>
          
        </article>

        <div className="place_card_thumbnail">
          <h3>English Bay</h3>

          <section className="time">
            <div className="travel_time_direction">
              <i className="bi bi-car-front"></i>
              <div>10 min </div> 
              <a>Direction</a>
            </div>
            <div>10:10</div>
            <div>11:45</div>
          </section>

          <i class="bi bi-arrows-fullscreen"></i>
          <img className="place_url" src="https://tinyurl.com/mrxhat82"width="400"/>
          <i class="bi bi-map"></i>
          <i class="bi bi-trash"></i>
        </div>

        <div className="place_card_thumbnail">
          <h3>Chambar</h3>

          <section className="time">
            <div className="travel_time_direction">
              <i class="bi bi-car-front"></i>
              <div>15 min </div> 
              <a>Direction</a>
            </div>
            <div>12:00</div>
            <div>1:00</div>
          </section>

          <i class="bi bi-arrows-fullscreen"></i>
          <img className="place_url" src="https://tinyurl.com/283e4nvt"width="400"/>
          <i class="bi bi-map"></i>
          <i class="bi bi-trash"></i>
        </div>

        <div className="place_card_thumbnail">
          <h3>Suspension Bridge</h3>
          <i class="bi bi-arrows-fullscreen"></i>
          <img className="place_url" src="https://tinyurl.com/4cfv4uud"width="400"/>
          <i class="bi bi-map"></i>
          <i class="bi bi-trash"></i>
        </div>
      </section>
      
    </div>
  );

}
