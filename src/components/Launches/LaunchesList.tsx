import React, { useState, useEffect } from "react";
import "./LaunchesList.css";
import LaunchesDataService from "../../services/launches.service";
import LaunchesData from "../../types/launches.type";
const Launches: React.FC = () => {
  const [launches, setLaunches] = useState<Array<LaunchesData>>([]);
  const getLaunches = () => {
    LaunchesDataService.getAll()
      .then((response: any) => {
        setLaunches(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getLaunches();
  }, []);
  return (
    <div>
      <div>
        {
          launches.map((l) => {
            <div>{l}</div>;
          })}
      </div>
    </div>
  );
};
export default Launches;
