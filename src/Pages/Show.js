import SnackDetails from "../components/SnackDetails";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//import { Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Show() {
  return (
    <div className="show">
      <h2>Service Detail page</h2>
      <SnackDetails />
    </div>
  );
}

export default Show;
