import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import AddRecord from "./Components/AddRecord";
import ShowRecord from "./Components/ShowRecords";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar /> 

      <Routes>
        <Route path="/add" element={<AddRecord/>} />
        <Route path="/show" element={<ShowRecord />} />
      </Routes>
    </Router>
  );
};

export default App;
