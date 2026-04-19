var a=[];
var ch=0;
while(ch!==4)
{
    ch= Number(prompt("1.Push\n2.Pop\n3.Display\n4.Exit"));
    switch(ch)
    {
        case 1: var item=Number (prompt("enter item"));
                a.push(item);
                break;        
        case 2: if(a.length===0)
                 {
                        console.log("stack empty");
                 }
                 else{
                        var item = a.pop();
                        console.log("deleted item is "+item);
                        break;
                 }
        case 3: if(a.length===0)
                 {
                        console.log("stack is emoty");
                 }
                 else{
                        console.log(a);
                break;
                 }
        case 4: console.log("bye-bye");
                break;


    }
}