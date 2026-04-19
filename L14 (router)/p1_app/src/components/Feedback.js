import "./Feedback.css";
import { useState, useEffect } from "react";
import db from "./Firebase";
import { ref, push, onValue } from "firebase/database";


function Feedback() {
    let [data, setData] = useState({
        name: "",
        feedback: ""
    });

    let [feedbackArray, setFeedbackArray] = useState([]);
    let [loading, setLoading] = useState(true); 

    useEffect(()=>
    {
        setLoading(true);
        onValue(ref(db,`feedbacks`),(snapshot)=>{
            if(snapshot.exists())
            {
                let a = [];
                let data = snapshot.val();
                for(let i in data)
                {
                    for(let j in data[i])
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

            await push(ref(db, `feedbacks/${nodeName}`), data);

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
                {loading? (<p>Loading...</p>) : (
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