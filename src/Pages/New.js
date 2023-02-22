import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function NewServiceForm() {
  let navigate = useNavigate();

  const addService = (newService) => {
    axios
      .post(`${API}/services`, newService)
      .then(() => {
        navigate(`/services`);
      })
      .catch((c) => console.warn("catch", c));
  };

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

  const [image, setImage] = useState("");

  const handleTextChange = (event) => {
    setService({ ...service, [event.target.id]: event.target.value });
    console.log("newly set Service", service);
    // if(!event.target.image) {
    //   // setImage('https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image')
    //   setImage("https://fastly.picsum.photos/id/63/200/300.jpg?hmac=Zhw62KKdLbsw5yRcx9gVDEQq4kzPwjZUrJAJUIryu6k")
    // }
  };

  //   const handleCheckboxChange = () => {
  //     setService({ ...service, is_healthy: !service.is_healthy });
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    addService(service);
  };
  return (
    <div className="newService">
      <form onSubmit={handleSubmit} className="newServiceFormBox">
        <label htmlFor="name">Job:</label>
        <textarea
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
          placeholder="Please enter desciption of job"
          onChange={handleTextChange}
        />

        <label htmlFor="starting_rate">starting rate:</label>
        <input
          id="starting_rate"
          type="text"
          name="starting_rate"
          value={service.starting_rate}
          placeholder="$"
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
        <label htmlFor="add_serviceprice">add service price :</label>
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
        <label htmlFor="add_service2">add service :</label>
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
        <label htmlFor="add_service2price">add service price :</label>
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
        <label htmlFor="date_service">Date:</label>
        <input
          id="date_service"
          type="text"
          //   pattern="http[s]*://.+"
          // required ? does it tho?
          value={service.date_service}
          placeholder=""
          onChange={handleTextChange}
        ></input>
        <br />
        <label htmlFor="image">Document:</label>
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

export default NewServiceForm;
