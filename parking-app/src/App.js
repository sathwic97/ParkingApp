import "./App.css";
import React, { useRef, useState, useEffect } from "react";

function App() {
  const driverInput = useRef();
  const numberPlateInput = useRef();

  const checkOutInput = useRef();
  const [numberPlate, setNumberPlate] = useState(" ");
  const [garage, setGarage] = useState([]);
  let date = new Date();

  const carEntry = () => {
    if (
      numberPlateInput.current.value !== " " &&
      driverInput.current.value !== " " &&
      checkOutInput.current.value !== " "
    ) {
      const newCar = {
        numberPlate: numberPlateInput.current.value,
        driver: driverInput.current.value,
        checkIn: [
          date.getHours(),
          (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(),
        ].join(":"),
        checkOut: checkOutInput.current.value,
      };
      setGarage([...garage, newCar]);
      console.log(garage);
    } else {
      alert(`All input fields must be filled.`);
    }
  };

  return (
    <div className="App">
      <h1>Parking Entry</h1>
      <div className="entries">
        <div>
          <span>
            <label htmlFor="numberPlate">Enter Number Plate</label>
          </span>
          <span>
            <input
              type="text"
              minLength={"10"}
              maxLength={"11"}
              ref={numberPlateInput}
              value={numberPlate}
              onChange={(event) => {
                let input = event.target.value.toUpperCase();
                setNumberPlate(input);
              }}
            />
          </span>
        </div>
        <div>
          <span>
            <label htmlFor="driver">Enter Driver Name</label>
          </span>
          <span>
            <input ref={driverInput} type="text" />
          </span>
        </div>
        <div>
          <span>
            <label htmlFor="checkin">Check-Out Time</label>
          </span>
          <span>
            <input
              type="time"
              ref={checkOutInput}
              min={`${[date.getHours(), date.getMinutes()].join(":")}`}
            />
          </span>
        </div>

        <div>
          <button
            type="submit"
            onClick={() => {
              carEntry();
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div id="box">
        <h1>Garage</h1>

        <div className="garageData">
          <div className="labelDiv">
            <span>
              <label htmlFor="">Number Plate</label>
            </span>
            <span>
              <label htmlFor="">Driver Name</label>
            </span>
            <span>
              <label htmlFor="">Check-In</label>
            </span>
            <span>
              <label htmlFor="">Check-Out</label>
            </span>
          </div>

          {garage.map((item) => {
            return (
              <div className="cars">
                <span>
                  <p>
                    <strong>{item.numberPlate}</strong>
                  </p>
                </span>
                <span>
                  <p>
                    <strong>{item.driver}</strong>
                  </p>
                </span>
                <span>
                  <p>
                    <strong>{item.checkIn} </strong>
                  </p>
                </span>
                <span>
                  <p>
                    <strong>{item.checkOut} </strong>
                  </p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
