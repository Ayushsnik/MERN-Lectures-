import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShowBooking.css";

const ShowBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("https://booking-vzav.onrender.com/get")
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
      });
  }, []);

  const formatTime = (timeString) => {
    return timeString.replace('T', ' ');
  };

  return (
    <div className="records-container">
      <h2>All Event Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Event</th>
            <th>Date</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.name}</td>
                <td>{booking.event}</td>
                <td>{formatTime(booking.time)}</td> 
                <td>{booking.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBooking;


// npm install express cors mongodb