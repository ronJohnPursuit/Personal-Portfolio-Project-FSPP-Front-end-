import { useState, useEffect } from "react";
import axios from "axios";
import Service from "./Service"; //this line needed?

//import { Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
console.log(API);

function AllServices() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/services`)
      .then((response) => {
        console.log(response.data);
        setServices(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);
  //   let total = services
  //     .map((service) => service.starting_rate)
  //     .reduce(
  //       (previousScore, currentScore, index) => previousScore + currentScore,
  //       0
  //     );
  //   console.log(total);
  // let sum = total.reduce(function (a, b) {
  //   return a + b;
  // });
  return (
    <div>
      <p className="serviceCards">
        {services.map((service) => {
          return <Service key={service.id} service={service} />;
        })}
      </p>
    </div>
  );
}

export default AllServices;
