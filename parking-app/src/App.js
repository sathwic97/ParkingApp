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
      <div className="garageData">
        <div>
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
            <label htmlFor="">check-Out</label>
          </span>
        </div>
        {garage.map((item) => {
          return (
            <div>
              <span>
                <strong>{item.numberPlate}</strong>
              </span>
              <span>
                <strong>{item.driver}</strong>
              </span>
              <span>
                <strong>{item.checkIn} </strong>
              </span>
              <span>
                <strong>{item.checkOut} </strong>
              </span>

              <div>
                <span></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
