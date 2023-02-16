import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// console.log(SnacksAll);
const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
  const [snacks, setSnacks] = useState([]);
  const [allsnacks, setAllSnacks] = useState([]);
  const { id } = useParams();
  //   const [snack, setSnack] = useState({});
  let navigate = useNavigate();

  // Inside SnackDetails function
  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id}`)
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
      .get(`${API}/snacks/${id}`)
      .then((response) => {
        console.log(response.data);
        setSnacks(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, [id]);
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => {
        console.log(response.data);
        setAllSnacks(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <article className="SnackDetails">
      <div className="snackShowBox">
        <div className="snackLinkBox">
          <h4 className="snackLinkBoxHdg">View Other Snacks</h4>
          <div>
            {allsnacks.map((snack) => {
              return (
                <tr className="snackLinkData">
                  <td></td>
                  <td></td>
                  <td></td>
                  <img
                    style={{ height: 25, width: 25 }}
                    src={
                      snack.image
                        ? snack.image
                        : "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.webp"
                    }
                  ></img>
                  <td>
                    <Link to={`/services/${snack.id}/`}>{snack.name}</Link>
                  </td>
                  <td>
                    <Link to={`/services/${snack.id}/edit`}>✏️</Link>
                  </td>
                </tr>
              );
            })}
          </div>
        </div>
        <div className="">
          <h3 className="snackName snackShowBoxHdg">{snacks.name}</h3>
          <h4 className="snackName snackShowBoxHdg">{snacks.descript}</h4>
          <br />
          <img
            className="foodImg"
            src={
              snacks.image
                ? snacks.image
                : "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.webp"
            }
            alt="image not found"
          />
          <br />
          <span className="snackSpec">
            Starting at: {snacks.starting_rate} | {"    "}
          </span>
          <span className="snackSpec">
            Price per notorized page: {snacks.add_serviceprice} | {"    "}
          </span>
          <span className="snackSpec">
            Additional fees: {snacks.add_service2price}
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
export default SnackDetails;
