let para = document.querySelector("#description");
let b1 = document.querySelector("#change-text-btn");
let originaltext =para.textContent;
b1.addEventListener("click",
    ()=>{
        if(para.textContent=== originaltext)
            {
                para.textContent = "this is new text";
            } 
        else{
            para.textContent = originaltext;
        }
    }

);

let dyna = document.querySelector("#color-paragraph");
let b2 = document.querySelector("#color-btn");
b2.addEventListener("click",
    ()=>{
        dyna.style.color = "red";
    }

); 

let list = document.querySelector("#item-list");
let b3 = document.querySelector("#remove-btn");
 b3.addEventListener("click",
    ()=>{
        let lastChild = list.lastElementChild;
        if(lastChild)
        {
            list.removeChild(lastChild);
        }
        else{
            alert("No items to remove");
        }

    }
 );

 let b4 = document.querySelector("#add-item-btn");
 let textfield = document.querySelector("#item-input");
 b4.addEventListener("click",
    ()=>{
        let str1 = textfield.value;
        let newelement = document.createElement('li');
        newelement.textContent= str1;
        list.appendChild(newelement);
        textfield.value = "";
    }

 );
