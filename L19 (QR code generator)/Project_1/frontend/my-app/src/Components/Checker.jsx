import { useState } from "react";
import axios from "axios";
import "./Checker.css";

function Checker() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  let handleNumber = ()=>{
    if(number==="")
    {
        handleChecker();
        return;
    }
    let obj = {
        params : {number}
    }
    let url = "http://localhost:9000/check";
    axios.get(url,obj)
    .then((response)=>{
        setResult(response.data);
    })
    .catch((error)=>alert(error))
    
  }
  let handleChecker =()=>{

    let url = "http://localhost:9000/check";
    axios.get(url)  //this works like fetch
    .then((response)=>{
        setResult(response.data);
    })
    .catch((error)=>alert(error))
  }

  return (
    <div className="container">
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="input"
      />
      <button onClick={handleNumber} className="button">Check</button>
      {result && <p className="result">Result: {result}</p>}
    </div>
  );
}

export default Checker;