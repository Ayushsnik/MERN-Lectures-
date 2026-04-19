import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/" className="nav-button"> Home </Link>
            <Link to="/about" className="nav-button"> About Me </Link>
            <Link to="/contact" className="nav-button"> Contact Me </Link>
        </div>
    );
}

export default Navbar;
