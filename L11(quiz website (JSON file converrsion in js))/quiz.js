let questionContainer = document.querySelector("#question");
let optionContainer = document.querySelector("#options");
let b1 = document.querySelector("#next-btn");
let scoretag = document.querySelector("#score");

let a = [];
let index = 0;
let score = 0;  
async function loadQuestion()
{
    try{
        let response = await fetch("./quiz.json");
        a = await response.json();
        displayQuestion();

    }
    catch(error)
    {
        console.log(error);
    }
}
loadQuestion();
function displayQuestion()
{
    let current = a[index];
    questionContainer.textContent = current.question ;
     current.options.forEach(
        (element,option_index)=>
        {
            let button = document.createElement('button');
            button.textContent= element;
            button.classList.add("option-btn");
            button.addEventListener("click",
                ()=>
                {
                    selectAnswer(option_index);
                }
            );
            optionContainer.appendChild(button);
        }

     );
}

function selectAnswer(option_index)
{
    let current = a[index];
    let buttonArray = document.querySelectorAll(".option-btn");
    buttonArray.forEach(
        (button,button_index)=>
        {
            if (current.correct===button_index)
            {
                button.style.backgroundColor = "green";
            }
            else
            {
                button.style.backgroundColor = "red";
            }
            button.disabled= true;
        }
    );
    if (current.correct===option_index)
    {
        score ++;
        scoretag.textContent= `Score : ${score}`;
    }
}
b1.addEventListener("click",
    ()=>
    {
        index++;
        if (index<a.length)
        {
            optionContainer.innerHTML = "";
            displayQuestion();

        }
        else 
        {
            questionContainer.textContent = "Quiz Completed";
            optionContainer.innerHTML = "";
            b1.style.display = "none";
            scoretag.textcontent = `final score : ${score} / ${a.length}`;
        }
    }
);