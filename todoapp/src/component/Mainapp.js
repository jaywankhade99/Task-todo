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
  const deleteItem = (id) => {
    console.log(id);
    const newitems = items.filter((item, index) => {
      return index!==id;
    });
    setitems(newitems);
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

      <div>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <h2>
                {item}
                <i
                  className="btn btn-secondary"
                  title="Delete"
                  onClick={() => deleteItem(index)}
                >
                  -
                </i>
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mainapp;
