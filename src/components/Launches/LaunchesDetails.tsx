import React, { useState, useEffect } from "react";
import "./LaunchesDetails.css";
import LaunchesData from "../../types/launches.type";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function LaunchesDeails() {
  const [details, setDetails] = useState<Partial<LaunchesData>>({});
  const location = useLocation().pathname.slice(10);

  const getDetails = () => {
    axios
      .get(`https://api.spacexdata.com/v3/launches/${location}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDetails();
  });
  return (
    <div>
      <div>
        <p>{details.flight_number}</p>
        <p>{details.mission_name}</p>
      </div>
    </div>
  );
}
