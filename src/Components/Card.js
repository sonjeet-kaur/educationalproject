import React from "react";
import { useNavigate } from "react-router-dom";
import profilepic from "../Images/mypic.jpeg";
import { Button } from "react-bootstrap";
import { colors } from "@mui/material";
export default function Card() {
  const navigate = useNavigate();

  function Visit() {
    navigate("/home");
  }
  return (
    <>
    {/* <div className="text-div"> */}
    <h2 className="text">Hover on card and see the Welcome page</h2>
    {/* </div> */}
    <div class="container card-container">
  <div class="card card-div">
    <div class="img-div">
      <img src={profilepic} alt=""/>
    </div>
    <div class="card-details highlight-card-color">
      <h2>Welcome</h2>
      <p className="card-para">My name is Sonjeet Kaur Sidhu.<br/>
       I am working as a Software developer in a IT Company. 
       You also work in this field and for this you need to learn  things 
        mentioned inside this website. 
        For visiting on site click the <span className="hightlight-visit">Visit button </span>given below.
       </p>

        <br /> <br/>  <br /> <br /> <br />

        <p className="card-para color"> <b className="padding">Thank you, </b>
        <br/>
         <b className="padding"> on visiting my site.</b>
        </p>
    </div>
   
    <div>
   
  </div>
  </div>
  <Button  className="visit-btn" onClick={Visit}> Visit Site</Button>
  </div>

  <div className="divider"></div>
    </>
  )
}
