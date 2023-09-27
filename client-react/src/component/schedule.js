import React from 'react';
import ReactDOM from 'react-dom';
import App from "App";
import '../index.css';

function Schedule() {
  return (
    <div>
      <title>Vancouver</title>

      <body>
        <div id="root"></div>

        <h1>Vancouver</h1>

        <h2>Day: 1 2 3 4 5</h2>
        <section class="timeline">
          <div>8:00</div>
          <div>9:00</div>
          {/* <!-- how to match the timeline with the photo? --> */}

        </section>
        <section class="itinerary_day">
          <div>
            <img class="place_url" />
            <span>map logo</span>
          </div>
        </section>


      </body>
    </div>
  );
}

export default Schedule;
