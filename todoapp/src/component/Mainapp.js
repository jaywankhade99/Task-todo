import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { button } from "react-bootstrap";

const Mainapp = () => {
  const [inputData, setinputData] = useState("");
  let [items, setitems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setitems([...items, inputData]);
      setinputData("");
    }
  };

  return (
    <>
      <div>
        <h1>Welcome to Portal</h1>
        <input
          type="text"
          placeholder="Add Participants"
          value={inputData}
          onChange={(e) => setinputData(e.target.value)}
        />

        <i className="btn btn-primary" title="Add" onClick={addItem}>
          +
        </i>
      </div>

      <div>{items.map((item) => {
          return (
            <>
              <h2>
                {item}
                <i className="btn btn-secondary" title="Delete">
                  -
                </i>
              </h2>
            </>
          );
        })}
        
      </div>
    </>
  );
};

export default Mainapp;
