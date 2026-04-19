let username = document.querySelector("#username");
let password = document.querySelector("#password");
let form = document.querySelector(".form");
form.addEventListener("submit",
    (event)=>
    {
        event.preventDefault();
        if (username.value==="" || password.value==="")
        {
            alert("please enter a value");
            return;
        }
        if (username.value==="root" && password.value==="1234")
        {
            alert("Login Successful");
            window.location.href = "./quiz.html";
        }
        else
        {
            alert("doesnt match");
        }
    }
);