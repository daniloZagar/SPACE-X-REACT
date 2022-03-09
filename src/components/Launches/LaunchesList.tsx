import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LaunchesList.css";
import LaunchesData from "../../types/launches.type";
import axios from "axios";
export default function Launches() {
  const [launches, setLaunches] = useState<Array<LaunchesData>>([]);
  let offset = 0;
  const loadLaunches = () => {
    let newLaunches = [];
    axios
      .get(`https://api.spacexdata.com/v3/launches?limit=20&offset=${offset}`)
      .then((response: any) => {
        newLaunches = response.data;
        setLaunches((oldLaunches) => [...oldLaunches, ...newLaunches]);
      })
      .catch((error) => {
        console.log(error);
      });
    offset += 20;
  };
  function handleScroll(e) {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      loadLaunches();
    }
  }
  function launchLink(id: number) {
    return `/launches/${id}`;
  }
  useEffect(() => {
    loadLaunches();
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div className="h-screen grid grid-cols-1 lg:grid-cols-3 gap-12">
        {launches.map((l, index) => {
          return (
            <Link to={launchLink(l.flight_number)} key={index}>
              <div className="col-span-1 flex flex-col lg:flex-row gap-12 justify-center items-center bg-yellow py-10 px-5">
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-white text-2xl">
                    Mission Number: {l.flight_number}
                  </p>
                  <p className="text-white text-2xl">
                    Mission Name: {l.mission_name}
                  </p>
                  <p className="text-white text-2xl">
                    Launch Year: {l.launch_year}
                  </p>
                </div>

                <img
                  className="w-20 h-20 text-2xl"
                  src={l.links.mission_patch_small}
                  alt="rocket"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
