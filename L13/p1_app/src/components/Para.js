import {useState} from "react";
function Para()
{
    let [count, setCount] = useState(0); //set count is asyn function 
    function kaalu()
    {
        count++;
        setCount(count);
    }
    return <div>
        <p>hello real para and count is {count}</p>
        <button onClick= {kaalu}> click me</button>
        </div>
}

export default Para;