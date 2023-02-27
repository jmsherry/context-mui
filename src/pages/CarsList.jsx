import React from "react";
import Intervener from "../components/Intervener";
import List from "../components/List";

function CarsList() {
  return (
    <>
      <h1>CarsList</h1>
      <Intervener>
        <Intervener>
          <Intervener>
            <Intervener>
              <List />
            </Intervener>
          </Intervener>
        </Intervener>
      </Intervener>
    </>
  );
}

export default CarsList;
