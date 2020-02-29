import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-head">
          <h1 className="heading">
            Who are we<span>?</span>
          </h1>
        </div>
        <div className="about-content">
          <span>D</span>warf. Incorporation is a organization which is operating
          in the field of Construction, Fabrication, <b>Smart Gardens</b>, Smart
          Library, Smart parking Solutions and various other smart city goals.
          We started our journey in the year 2019 at New Delhi with a small team
          of achievers. People behind Dwarf have remarkable experience in
          Fabrication, <b>Designing</b>, <b>Finance</b> and <b>Marketing</b>.
        </div>
      </div>
      <hr />
      <div className="space"></div>
    </>
  );
};

export default Home;
