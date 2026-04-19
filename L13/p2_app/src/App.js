//import logo from './logo.svg';
import './App.css';
import "./components/styles.css";
import { useState } from "react";
function App(){
  let [Arr,setArr]= useState([]);
  let [task,setTask]= useState("");
  function kaalu(event){
    setTask(event.target.value);
  }
  function daalo(event){
    event.preventDefault();
    if (task)
    {
      setArr([...Arr,task]);
      setTask("");
    }
  }
  function nikaalo(index)
  {
    setArr(Arr.filter((ele,i)=>i!==index));
  }

  return (
    <div className='container'>
      <h2>To Do App</h2>
      <form onSubmit={daalo}>
        <input type= 'text' onChange={kaalu} value={task}/>
        <button className='add-btn' type = 'submit'>submit</button>
      </form>
      <div className='bottom'>
        {
          Arr.map(
            (element,index)=>
              <div className='card'k key={index}>
                <span>{element}</span>
                <button onClick={()=>(nikaalo(index))} className= 'delete-btn'>delete</button>
              </div>
          )
        }
      </div>
    </div>
  )
}

export default App;
