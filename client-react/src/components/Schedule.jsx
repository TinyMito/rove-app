export default function Schedule() {
  return (
    <div>
      <title>Vancouver</title>
      <div id="root"></div>

      <h1>Vancouver</h1>

      <h2>Day: 1 2 3 4 5</h2>
      <h3 className="travel_dates">2023.10.12-2023.10.16</h3>
      <section className="timeline">
        <div>8:00</div>
        <div>9:00</div>
        <div className="travel_time_direction">15 min Direction</div>
        <div>10:15</div>
        <div>11:00</div>
        {/* <!-- how to match the timeline with the photo? --> */}

      </section>
      <section className="itinerary_day">
        <div>
          <img className="place_url" />

          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z" />
            </svg>
          </span>

        </div>
      </section>
    </div>
  );

}
