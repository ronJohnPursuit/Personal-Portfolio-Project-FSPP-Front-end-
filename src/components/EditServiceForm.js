import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function EditServiceForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [service, setService] = useState({
    name: "",
    descript: "",
    starting_rate: "",
    add_service: "",
    add_serviceprice: "",
    add_service2: "",
    add_service2price: "",
    date_service: "",
    image: "",
  });

  const updateService = (updatedService) => {
    axios
      .put(`${API}/services/${id}`, updatedService)
      .then(
        () => {
          console.log("this is the id: ", { id });
          navigate(`/services/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setService({ ...service, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/services/${id}`)
      .then((response) => {
        setService(response.data);
      })
      .catch((c) => {
        navigate("/error");
      });
  }, [id]);

  //   axios.get(`${API}/services/${id}`)
  //   .then((response) => setService(response.data))
  //   .catch((c) => navigate("/error")
  // )
  // }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateService(service, id);
  };

  return (
    <div className="newService">
      <form onSubmit={handleSubmit} className="newServiceFormBox">
        <label htmlFor="name">Job:</label>
        <input
          id="name"
          value={service.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Please enter the service name or type"
          required
        />

        <label htmlFor="descript">description:</label>
        <textarea
          id="descript"
          type="text"
          name="descript"
          value={service.descript}
          placeholder="Please enter amount of descript in grams"
          onChange={handleTextChange}
        />

        <label htmlFor="starting_rate">starting rate:</label>
        <input
          id="starting_rate"
          type="text"
          name="starting_rate"
          value={service.starting_rate}
          placeholder="Please enter amount of starting_rate in grams"
          onChange={handleTextChange}
        />

        <label htmlFor="add_service">Added service:</label>
        <textarea
          id="add_service"
          type="text"
          name="add_service"
          value={service.add_service}
          placeholder="Please describe additional service"
          onChange={handleTextChange}
        />

        {/* <label htmlFor="is_healthy">Is Healthy:</label>
            <input
              id="is_healthy"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={service.is_healthy}
            /> */}
        <br />
        <label htmlFor="add_serviceprice">add. service price:</label>
        <input
          id="add_serviceprice"
          type="text"
          //   pattern="http[s]*://.+"
          // required ? does it tho?
          value={service.add_serviceprice}
          placeholder="$"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="add_service2">add service:</label>
        <textarea
          id="add_service2"
          type="text"
          //   pattern="http[s]*://.+"
          // required ? does it tho?
          value={service.add_service2}
          placeholder="describe add service"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="add_service2price">add service price:</label>
        <input
          id="add_service2price"
          type="text"
          //   pattern="http[s]*://.+"
          // required ? does it tho?
          value={service.add_service2price}
          placeholder="$"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="date_service">Date</label>
        <textarea
          id="date_service"
          type="text"
          //   pattern="/^\d{4}-\d{2}-\d{2}$/"
          // required ? does it tho?
          value={service.date_service}
          placeholder=""
          onChange={handleTextChange}
        ></textarea>
        <br />
        <label htmlFor="image">document:</label>
        <textarea
          id="image"
          type="text"
          //   pattern="http[s]*://.+"
          // required ? does it tho?
          value={service.image}
          placeholder="image url"
          onChange={handleTextChange}
        ></textarea>
        <br />
        <span>
          <input className="newSubmitButton" type="submit" />
        </span>
        <Link to={`/`}>
          <button className="newCancelButton">Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default EditServiceForm;
