import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function NewSnackForm() {
  let navigate = useNavigate();

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [snack, setSnack] = useState({
    name: "",
    descript: "",
    starting_rate: "",
    add_service: "",
    add_serviceprice: "",
    add_service2: "",
    add_service2price: "",
  });

  const [image, setImage] = useState("");

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
    console.log("newly set Snack", snack);
    // if(!event.target.image) {
    //   // setImage('https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image')
    //   setImage("https://fastly.picsum.photos/id/63/200/300.jpg?hmac=Zhw62KKdLbsw5yRcx9gVDEQq4kzPwjZUrJAJUIryu6k")
    // }
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };
  return (
    <div className="newSnack">
      <form onSubmit={handleSubmit} className="newSnackFormBox">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Please enter the snack name or type"
          required
        />

        <label htmlFor="descript">descript:</label>
        <input
          id="descript"
          type="text"
          name="descript"
          value={snack.descript}
          placeholder="Please enter amount of descript in grams"
          onChange={handleTextChange}
        />

        <label htmlFor="starting_rate">starting_rate:</label>
        <input
          id="starting_rate"
          type="text"
          name="starting_rate"
          value={snack.starting_rate}
          placeholder="Please enter amount of starting_rate in grams"
          onChange={handleTextChange}
        />

        <label htmlFor="add_service">Added service:</label>
        <input
          id="add_service"
          type="text"
          name="add_service"
          value={snack.add_service}
          placeholder="Please describe additional service"
          onChange={handleTextChange}
        />

        {/* <label htmlFor="is_healthy">Is Healthy:</label>
            <input
              id="is_healthy"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={snack.is_healthy}
            /> */}
        <br />
        <label htmlFor="add_serviceprice">add_serviceprice URL:</label>
        <input
          id="add_serviceprice"
          type="text"
          //   pattern="http[s]*://.+"
          // required ? does it tho?
          value={snack.add_serviceprice}
          placeholder="$"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="add_service2">add_service2 URL:</label>
        <input
          id="add_service2"
          type="text"
          pattern="http[s]*://.+"
          // required ? does it tho?
          value={snack.add_service2}
          placeholder="describe add service"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="add_service2price">add_service2price URL:</label>
        <input
          id="add_service2price"
          type="text"
          pattern="http[s]*://.+"
          // required ? does it tho?
          value={snack.add_service2price}
          placeholder="$"
          onChange={handleTextChange}
        />

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

export default NewSnackForm;
