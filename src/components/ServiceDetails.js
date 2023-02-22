import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// console.log(ServicesAll);
const API = process.env.REACT_APP_API_URL;

function ServiceDetails() {
  const [services, setServices] = useState([]);
  const [allservices, setAllServices] = useState([]);
  const { id } = useParams();
  //   const [service, setService] = useState({});
  let navigate = useNavigate();

  // Inside ServiceDetails function
  const handleDelete = () => {
    axios
      .delete(`${API}/services/${id}`)
      .then(
        () => {
          navigate(`/services`);
        },
        (error) => console.error(error) //normally for 404 errors when item is not found
      )
      .catch((c) => console.warn("catch", c)); //for 500 error for server erros
  };
  useEffect(() => {
    axios
      .get(`${API}/services/${id}`)
      .then((response) => {
        console.log(response.data);
        setServices(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, [id]);
  useEffect(() => {
    axios
      .get(`${API}/services`)
      .then((response) => {
        console.log(response.data);
        setAllServices(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <article className="ServiceDetails">
      <div className="serviceShowBox">
        <div className="serviceLinkBox">
          <h4 className="serviceLinkBoxHdg">View Your Other Services:</h4>
          <div>
            {allservices.map((service) => {
              return (
                <tr className="serviceLinkData">
                  <td></td>
                  <td></td>
                  <td></td>
                  <img
                    style={{ height: 25, width: 25 }}
                    src={
                      service.image
                        ? service.image
                        : "https://image.cnbcfm.com/api/v1/image/106657061-1597086951668-taxtime.jpeg?v=1609957898&w=1600&h=900"
                    }
                  ></img>
                  <td>
                    <Link to={`/services/${service.id}/`}>{service.name}</Link>
                  </td>
                  <td>
                    <Link to={`/services/${service.id}/edit`}>✏️</Link>
                  </td>
                </tr>
              );
            })}
          </div>
        </div>
        <div className="">
          <h3 className="serviceName serviceShowBoxHdg">{services.name}</h3>
          <h4 className="serviceName serviceShowBoxHdg">{services.descript}</h4>
          <h5>
            {" "}
            {services.date_service
              ? typeof services.date_service == "object"
                ? services.date_service
                : services.date_service.slice(0, 10)
              : "date TBD"}
          </h5>
          <br />
          <img
            className="foodImg"
            src={
              services.image
                ? services.image
                : "https://image.cnbcfm.com/api/v1/image/106657061-1597086951668-taxtime.jpeg?v=1609957898&w=1600&h=900"
            }
            alt="image not found"
          />
          <br />
          <span className="serviceSpec">
            Starting at: ${services.starting_rate} | {"    "}
          </span>
          <span className="serviceSpec">
            {/* Price per notorized page */}
            {services.add_service}: ${services.add_serviceprice} | {"    "}
          </span>
          <span className="serviceSpec">
            {/* Additional fees */}
            {services.add_service2} : ${services.add_service2price}
          </span>
          <br />

          <div className="showNavigation">
            <Link to={`/services`}>
              <button>Back</button>
            </Link>

            <Link to={`/services/${id}/edit`}>
              {" "}
              <button>Edit</button>
            </Link>

            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </article>
  );
}
export default ServiceDetails;
