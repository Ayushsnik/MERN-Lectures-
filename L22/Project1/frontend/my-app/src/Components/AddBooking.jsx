import React, { useState } from "react";
import axios from "axios";
import "./AddBooking.css";

const AddBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    event: "",
    time: "",
    phone: ""
  });

  let handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://booking-vzav.onrender.com/add", formData)
      .then(() => {
        alert("Booking successful!");
        setFormData({ name: "", event: "", time: "", phone: "" });
      })
      .catch(() => {
        alert("Error booking event.");
      });
  };

  return (
    <div className="form-container">
      <h2>Register for Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="event"
          placeholder="Event Name"
          value={formData.event}
          onChange={handleChange}
          required
        />
        <input
          name="time"
          type="datetime-local"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default AddBooking;
