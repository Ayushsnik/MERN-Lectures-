let b1= document.querySelector("button");
let field = document.querySelector("#city");
let container = document.querySelector("#weather");
b1.addEventListener("click",
    ()=> 
    {
        let city = field.value ;
        if(city==="")
        {
            alert("please enter city");
            return;
        }
        fetchWeather(city);
    }
);
async function fetchWeather(city)
{
    try
    {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ed570ac911dad2a255e2965a53ced74&units=metric`);//ye wala bhi function time leta hai//
        if (response.ok)
        {
            let data = await response.json(); //response.json ek function hai so () <= ye wala brackets dalna padega. && ye function time leta hai so await mein dal diya//
            displayWeather(data);
        }
        else
        {
            console.log("CityNotFound");
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
function displayWeather(data)
{
    let {weather, wind, sys, name, main} = data;
    container.innerHTML = `<h2>Weather in ${name}, ${sys.country}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Weather: ${weather[0].description}</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Wind Speed: ${wind.speed} m/s</p>
            <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" class="weather-icon" alt="Weather Icon">`

    //console.log(data);
}