import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBooking from "./Components/AddBooking";
import ShowBooking from "./Components/ShowBooking";
import Navbar from "./Components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/add" element={<AddBooking />} />
        <Route path="/show" element={<ShowBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
