import React from "react";
import "./home.css";
import Date from "./date.png";
import loca from "./pin.png";
import people from "./people (1).png";
import warn from "./warning.png";
import facebook from "./facebook (1).png";
import insta from "./instagram (1).png";
import Pin from "./pinterest.png";

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
        <img className="date" src={Date} alt="" />
        <img className="loca" src={loca} alt="" />
        <p className="address">269 Clinton Ave, Brooklyn, NYE</p>
        <img className="pep" src={people} alt="" />
        <p className="people">200-244</p>
        <img className="warn" src={warn} alt="" />
        <p className="warning">
          <spam className="pets">Warning!</spam> Pets not Allowed
        </p>
        <p className="name">Enter Name:=</p>
        <form>
          <input className="input" type="text" placeholder="123-45-678" />
        </form>
        <button class="button">Book Now!!!</button>
      </div>
      <div className="social">
        <p>
          <a href="https://www.facebook.com/people/W%C4%9Bd%C5%84es%C4%91a%C3%BD-A%C4%91d%C4%81m%C5%A1/100088355147707/">
            <img className="face" src={facebook} alt="" />
          </a>
          <a href="https://www.facebook.com/people/W%C4%9Bd%C5%84es%C4%91a%C3%BD-A%C4%91d%C4%81m%C5%A1/100088355147707/">
            <img className="insta" src={insta} alt="" />
            <a href="https://www.facebook.com/people/W%C4%9Bd%C5%84es%C4%91a%C3%BD-A%C4%91d%C4%81m%C5%A1/100088355147707/">
              <img className="pin" src={Pin} alt="" />
            </a>
          </a>
        </p>
      </div>
    </>
  );
}
export default home;
