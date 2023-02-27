import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { CarsProvider } from "./components/contexts/cars.context";

import Layout from "./components/Layout";

import Clocks from "./pages/Clocks";
import Form from "./pages/Form";
import CarsList from "./pages/CarsList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <CarsProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Form />} />
              <Route path="clocks" element={<Clocks />} />
              <Route path="cars" element={<CarsList />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CarsProvider>
      </Router>
    </div>
  );
}

export default App;
