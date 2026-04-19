import "./Feedback.css";
import { useState, useEffect } from "react";
import db from "./Firebase";
import { ref, push, onValue } from "firebase/database";
import Loader from "./Loader";


function Feedback() {
    let [data, setData] = useState({
        name: "",
        feedback: ""
    });

    let [feedbackArray, setFeedbackArray] = useState([]);
    let [loading, setLoading] = useState(true); 

    useEffect(()=>          //useEffect is used to fetch data from firebase database when the component is mounted
    {
        setLoading(true);    
        onValue(ref(db,`feedbacks`),(snapshot)=>{     //onvalue is used to fetch data from firebase database when there is any change in that node, ref is used to refer to that node, db is the database instance, feedbacks is the node name, snapshot is the data fetched from that node.
            if(snapshot.exists())    //snapshot.exists() checks if there is any data in that node.
            {
                let a = [];
                let data = snapshot.val();  //snapshot.val() is used to get the data from that node in the form of object.
                for(let i in data)  //for loop is used to iterate through the object. i is the key of the object.
                {
                    for(let j in data[i])  //j is the key of the inner object.
                    {
                        a.push(data[i][j]);
                    }
                }
                setFeedbackArray(a.reverse());
            }
            else
            {
                setFeedbackArray([]);
            }
            setLoading(false);
        });
    },[]);

    function handleChange(event) {
        let { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            if (data.name === "" || data.feedback === "") {
                alert("Please enter values");
                return;
            }

            const now = new Date();
            const formattedTimestamp = now.toLocaleString("en-GB").replace(",", ""); // Formats as "27/02/2025 17:40:06"
            const nodeName = formattedTimestamp.replace(/\//g, "-");

            await push(ref(db, `feedbacks/${nodeName}`), data);  //push is used to add data to firebase database, ref is used to refer to that node, db is the database instance, feedbacks is the node name, data is the data to be added.

            setData({ name: "", feedback: "" });
        } catch (error) {
            console.log(error);
        }
    }

  
    
    return (
        <div className="feedback-wrapper">
            <div className="feedback-container">
                <h2>Feedback Form</h2>
                <form onSubmit={handleSubmit} className="feedback-form">
                    <div className="group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name" required onChange={handleChange} value={data.name} />
                    </div>

                    <div className="group">
                        <label htmlFor="feedback">Feedback</label>
                        <textarea id="feedback" name="feedback" required onChange={handleChange} value={data.feedback} />
                    </div>

                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
            <div className="feedback-panel">
                <h2>Feedback received</h2>
                {loading? (<Loader/>) : (
                    <ul className="feedback-list">
                        {feedbackArray.length>0 ? (
                            feedbackArray.map((obj)=>{
                                return <li className="feedback-item">
                                    <strong>{obj.name}</strong>
                                    <p>{obj.feedback}</p>
                                </li>
                            })
                        )
                        : (<p>No Feedback</p>)}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Feedback;