import React from "react";
import "./Home.css";
import LaunchesList from "../../components/Launches/LaunchesList";

function Home() {
  return (
    <div className="Home">
      <div>
        <LaunchesList />
      </div>
    </div>
  );
}

export default Home;
