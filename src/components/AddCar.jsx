import React, { useContext } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { CarsContext } from "./contexts/cars.context";

function AddCar() {
  const { fetchCars } = useContext(CarsContext);
  console.log(fetchCars);

  // const newCar = {
  //   name: "Bugatti",
  //   bhp: 666,
  // };

  return (
    <>
      <CircularProgress color="success" />
      <Button
        variant="outlined"
        onClick={() => fetchCars()}
        sx={{ fontSize: "3rem", color: "salmon" }}
      >
        Load Cars
      </Button>
    </>
  );
}

export default AddCar;
