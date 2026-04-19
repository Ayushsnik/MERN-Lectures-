import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./components/Feedback.css"

import Feedback from './components/Feedback';
import "./components/Feedback.css";

function App() {
  return (
  <BrowserRouter>
    <Navbar name="Recipe"/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/Feedback" element={<Feedback/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;