import React, { useState } from "react";
import axios from "axios";
import "./AddRecord.css";

const AddRecord = () => {
  const [formData, setFormData] = useState({
    name: "",
    std: "",
    roll: "",
    marks: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  let handleSubmit = (event)=>{
    event.preventDefault();
    let url =  "http://localhost:9000/save";
    axios.post(url, formData)
    .then ((response)=>{
        alert("Successfull");
    })
    .catch((error)=>{
        alert(error);
    })
    .finally(
        setFormData(
            {
                name: "",
                std: "",
                roll: "",
                marks: ""
            }
        )
    );
  }

  
  return (
    <div className="form-container">
      <h2>Add Student Record</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="std"
          placeholder="Enter Standard (e.g., 10A)"
          value={formData.std}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="roll"
          placeholder="Enter Roll Number"
          value={formData.roll}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="marks"
          placeholder="Enter Marks"
          value={formData.marks}
          onChange={handleChange}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddRecord;
