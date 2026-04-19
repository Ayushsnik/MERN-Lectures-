
import { useNavigate } from "react-router-dom";
import "./Form.css"; 
import { getAuth, signOut } from "firebase/auth";

function Home(){
 
    let auth = getAuth(); // to connect code and firebase  //
    let nav = useNavigate(); // to navigate between pages  //
  
    let handleSubmit = (event)=>{
      event.preventDefault(); // prevent default action of form submission //
      signOut(auth) // signOut method from firebase auth //
      .then(()=>{
        alert("login-out Successfull");
        nav("/login"); // Dot maat laga//
    })
    .catch((error)=>alert(error))

    }

  return (
    <div className="container">
      <div className="form-box">
        <h2>Welcome to Your Dashboard</h2>
        <p>You are successfully</p>

        <div className="button-group">
          <button onClick={()=>nav("/change")} style={{ backgroundColor: "#28a745" }}> 
            Change Password
          </button> {/* Navigate to Change Password Page */}

          <button onClick={handleSubmit} style={{ backgroundColor: "#dc3545" }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;