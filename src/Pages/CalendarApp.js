import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "../App.css";

const API = process.env.REACT_APP_API_URL;
console.log(API);

function CalendarApp() {
  const [date, setDate] = useState(new Date());
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => {
        console.log(response.data);
        setSnacks(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);
  let total = snacks
    .map((snack) => snack.starting_rate)
    .reduce(
      (previousScore, currentScore, index) => previousScore + currentScore,
      0
    );
  let formattedDate = snacks.map((snack) => snack.date_service.slice(0, 10));
  console.log(total);
  console.log(formattedDate);

  // let dateTest = new Date(formattedDate[0]).toLocalDateString();
  // console.log("flag test", dateTest);
  return (
    <div className="calendar-app">
      <h1 className="text-center">Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
        {console.log(date)}
      </div>
      <div className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
        <br />
        <br />
        <h4>
          your current services total is:
          <br />
          <h5>${total}</h5>
        </h4>
      </div>
    </div>
  );
}

export default CalendarApp;
