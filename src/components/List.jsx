import React, { useContext } from "react";
import { CarsContext } from "./contexts/cars.context";

import AddCar from "./AddCar";

function List() {
  // get from context
  const { cars, loading, error } = useContext(CarsContext);
  console.log("cars", cars);

  if(loading) return <p>Loading...</p>

  if(error) return <p>Error: {error.message}</p>


  return (
    <>
      <AddCar />
      <ul>
        {cars.map(({ name, bhp }, i) => (
          <li key={i}>
            {name} ({bhp}bhp)
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
