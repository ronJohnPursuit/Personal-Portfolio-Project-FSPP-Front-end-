import { Link } from "react-router-dom";
import "../App.css";

function Service({ service }) {
  // console.log(service);

  return (
    <section>
      <ul>
        {
          <li>
            <Link className="servicePicBoc" to={`/services/${service.id}`}>
              <img
                style={{ width: "200", height: "200" }}
                className="foodImg"
                src={
                  service.image
                    ? service.image
                    : "https://image.cnbcfm.com/api/v1/image/106657061-1597086951668-taxtime.jpeg?v=1609957898&w=1600&h=900"
                }
                // alt="image not found"
              />
            </Link>
            <Link className="serviceNameBox" to={`/services/${service.id}`}>
              <h4 className="serviceNameBoxname">{service.name}</h4>
              <h4>
                Starting Price:
                <br />${service.starting_rate}
              </h4>
              <h4>
                Shedule date of service:
                <br />
                {service.date_service
                  ? typeof service.date_service == "object"
                    ? service.date_service
                    : service.date_service.slice(0, 10)
                  : "date TBD"}
              </h4>
              {console.log("flag", typeof service.date_service)}
              {/* {service.name} */}
              {/* {services.starting_rate}
              {services.date_service} */}
            </Link>
            <span>{"     "}</span>
            <span>
              <Link to={`/services/${service.id}/edit`} className="editPencil">
                ✏️
              </Link>
            </span>
          </li>
        }
      </ul>
    </section>
  );
}

export default Service;

//old heart <span>♡</span>  not visible enough

//streach goal aside for each card

// function Service({ service }) {
//   console.log(service);
//   return (
//     <tr>
//       <td>{service.is_healthy ? <span>"♥"</span> : <span>"♡"</span>}</td>
//       <td>
//         <a href={service.image} target="_blank" rel="noreferrer">
//           {service.name}
//         </a>
//         {/* why is clicking on the name of the service taking me to just the image? */}
//       </td>
//       <td>
//         <Link to={`/services/${service.id}`}>✏️</Link>
//       </td>
//     </tr>
//   );
// }

{
  /* <span>
          {service.is_healthy ? (
            <span className="redHeart">❤️</span>
          ) : (
            <span className="blackHeart">♡</span>
          )}{" "}
        </span> */
}
