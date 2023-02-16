import "react-calendar/dist/Calendar.css";
import React from "react";
import AllServices from "../components/AllServices";
import CalendarApp from "../Pages/CalendarApp";

function Index() {
  return (
    <div>
      <div className="mainAside">
        <aside className="calendar-app">
          <CalendarApp />
        </aside>
        <h1>
          <span>select your services:</span>
          <br />
          <AllServices />
        </h1>
      </div>
    </div>
  );
}

export default Index;
