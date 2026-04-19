import { useEffect, useState } from "react";
import "./Navbar.css"
import {Link} from "react-router-dom";

function Navbar(props)
{
    const users = ["Harman", "Harshit", "Aditya", "Amit", "Aryan", "Anvi", "Abhishek"];
    let [search, setSearch] =useState("");
    let [Arr, setArr] = useState([]);
    useEffect(()=>{
        if (search==="")
        {
            setArr([]);
        }
        else
        {
            setArr(users.filter((element,i)=>element.toLowerCase().includes(search.toLowerCase())));
        } 
    }, [search]);
    return <div className="navbar">
        <h1 className= "logo">{props.name}</h1>
        <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>            
        </div>
        <div className="search-container">
            <input type="text"
                   className="search-box" 
                   placeholder="Enter users..." 
                   onChange={(event)=> setSearch(event.target.value)}/>
        </div>
        {Arr} yeh ek arr hai .... {search} yeh ek search hai
    </div>
}
export default Navbar;  