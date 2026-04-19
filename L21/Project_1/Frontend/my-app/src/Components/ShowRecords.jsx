import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ShowRecords.css";

const ShowRecord = () => {
  const [records, setRecords] = useState([]);

  function display()
    {
    let url = "http://localhost:9000/get-students";
    axios.get(url)
    .then((response)=>{
      setRecords(response.data);
    })
    .catch((error)=>alert(error));
  }
  useEffect(()=>{
    display();
  },[]);

   let handleDelete = (id) => {
    let url= `http://localhost:9000/delete/${id}`;
    axios.delete(url)
    .then((response)=>{
      alert("Deleted Successfully");
      display();
    })
    .catch((error)=>alert(error));
  
   }


  return (
    <div className="records-container">
      <h2>Student Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th> 
            <th>Name</th>
            <th>Standard</th>
            <th>Roll Number</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td> 
                <td>{record.name}</td>
                <td>{record.std}</td>
                <td>{record.roll}</td>
                <td>{record.marks}</td>
                <td>
                <button 
                    className="delete-button"
                    onClick={() => {handleDelete(record.id)}}
                >
                    Delete
                </button>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No records found</td> 
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowRecord;
