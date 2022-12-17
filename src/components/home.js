import React from "react";
import "./home.css";
import Date from "./date.png";
import loca from "./people (1).png";
import people from "./pin.png";
import warn from "./warning.png";

function home() {
  return (
    <>
      <div className="header">
        <h1 className="main-heading">
          <spam className="so">So Strange,</spam> but out of all colours{" "}
          <u className="dark">Black</u> gives you more emotions
        </h1>
      </div>
      <div className="para">
        <p className="para-content">
          I hope all of you have watched Wednesday on Netflix. <br></br>
          We are Introducing a Live Drama Which will be full of surprises. So
          all do come
        </p>
      </div>
      <div className="jan">
        <img className="" src={Date} alt="" />
        <img className="loca" src={loca} alt="" />

        <img className="pep" src={people} alt="" />
        <img className="warn" src={warn} alt="" />
      </div>
    </>
  );
}
export default home;
