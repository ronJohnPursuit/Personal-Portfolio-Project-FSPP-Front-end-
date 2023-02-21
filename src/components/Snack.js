import { Link } from "react-router-dom";
import "../App.css";

function Snack({ snack }) {
  // console.log(snack);

  return (
    <section>
      <ul>
        {
          <li>
            <Link className="snackPicBoc" to={`/services/${snack.id}`}>
              <img
                style={{ width: "200", height: "200" }}
                className="foodImg"
                src={
                  snack.image
                    ? snack.image
                    : "https://image.cnbcfm.com/api/v1/image/106657061-1597086951668-taxtime.jpeg?v=1609957898&w=1600&h=900"
                }
                // alt="image not found"
              />
            </Link>
            <Link className="snackNameBox" to={`/services/${snack.id}`}>
              <h4 className="snackNameBoxname">{snack.name}</h4>
              <h4>
                Starting Price:
                <br />${snack.starting_rate}
              </h4>
              <h4>
                Shedule date of service:
                <br />
                {snack.date_service
                  ? typeof snack.date_service == "object"
                    ? snack.date_service
                    : snack.date_service.slice(0, 10)
                  : "date TBD"}
              </h4>
              {console.log("flag", typeof snack.date_service)}
              {/* {snack.name} */}
              {/* {snacks.starting_rate}
              {snacks.date_service} */}
            </Link>
            <span>{"     "}</span>
            <span>
              <Link to={`/services/${snack.id}/edit`} className="editPencil">
                ✏️
              </Link>
            </span>
          </li>
        }
      </ul>
    </section>
  );
}

export default Snack;

//old heart <span>♡</span>  not visible enough

//streach goal aside for each card

// function Snack({ snack }) {
//   console.log(snack);
//   return (
//     <tr>
//       <td>{snack.is_healthy ? <span>"♥"</span> : <span>"♡"</span>}</td>
//       <td>
//         <a href={snack.image} target="_blank" rel="noreferrer">
//           {snack.name}
//         </a>
//         {/* why is clicking on the name of the snack taking me to just the image? */}
//       </td>
//       <td>
//         <Link to={`/snacks/${snack.id}`}>✏️</Link>
//       </td>
//     </tr>
//   );
// }

{
  /* <span>
          {snack.is_healthy ? (
            <span className="redHeart">❤️</span>
          ) : (
            <span className="blackHeart">♡</span>
          )}{" "}
        </span> */
}
