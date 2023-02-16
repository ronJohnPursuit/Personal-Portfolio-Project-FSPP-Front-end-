import { useState, useEffect } from "react";
import axios from "axios";
import Snack from "./Snack"; //this line needed?

//import { Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
console.log(API);

function AllServices() {
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
  //   let total = snacks
  //     .map((snack) => snack.starting_rate)
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
      <p className="snackCards">
        {snacks.map((snack) => {
          return <Snack key={snack.id} snack={snack} />;
        })}
      </p>
    </div>
  );
}

export default AllServices;
