import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Doubt.css";

function Doubt() {
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [doubt, setDoubt] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit(event)
  {
    event.preventDefault();
    let data = {name, phone, Doubt}
    emailjs.send("service_1234","template_123456", data, "OYz0B6nQz-9sg3TxM")
    .then(()=>{
        setName("");
        setPhone("");
        settDoubt("");
        setMsg("Successfully sent!");
        setTimeout(()=>{setMsg("")},3000);
    })
    .catch((error)=> console.log(error));
  }
  

  

  return (
    <div className="container">
      <h1>Doubt Submission</h1>
      <form onSubmit={handleSubmit}  className="doubt-form">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(event)=>setName(event.target.value)}
          value={name}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter your phone number"
          onChange={(event)=>setPhone(event.target.value)}
          value={phone}
          className="input-field"
        />
        <textarea
          placeholder="Enter your doubt"
          rows="3"
           className="textarea-field"
           onChange={(event)=>setDoubt(event.target.value)}
          value={doubt}
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <h2 className="msg">{msg}</h2>
    </div>
  );
}

export default Doubt;