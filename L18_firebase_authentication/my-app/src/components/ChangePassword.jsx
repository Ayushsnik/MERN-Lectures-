
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updatePassword } from "firebase/auth";
import "./Form.css";  

function ChangePassword(){
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
    let auth = getAuth(); // to connect code and firebase //
    let nav = useNavigate();
  
    let handleSubmit = (event)=>{
      event.preventDefault();
      if (newPassword === confirmPassword) {
        updatePassword(auth.currentUser,newPassword)
      .then(()=>{
        alert("Password changed Successfully");
        nav("/home"); // Dot maat laga//
    })
    .catch((error)=>alert(error))
    .finally(()=>{
        setUsername("");  
        setPassword("");
        setConfirmPassword("");
    })
   }
      else{
        alert("not same");
        setPassword("");
        setConfirmPassword("");
    }
    }
  
  return (
    <div className="container">
      <div className="form-box">
        <h2>Change Password</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder="Enter new password"
            />
          </div>

          <div className="form-group">
            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm new password"
            />
          </div>

          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;