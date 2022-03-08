import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { button } from "react-bootstrap";

const Mainapp = () => {
  
  

  return (
    <>
      <div>
        <h1>Welcome to Portal</h1>
        <input
          type="text"
          placeholder="Add Participants"
         
        />

        <i className="btn btn-primary" title="Add" >
          +
        </i>
      </div>

      <div>
        <h2>Jay 
    <i className="btn btn-secondary" title="Delete">-</i></h2>
      
      </div>
    </>
  );
};

export default Mainapp;
