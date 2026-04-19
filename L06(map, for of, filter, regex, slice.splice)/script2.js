var a=[];
var ch=0;
while(ch!==6)
{
    ch= Number(prompt("1.Push\n2.Pop\n3.Display\n4.Insert at start\n5.remove from start\n6 .Exit"));
    switch(ch)
    {
        case 1: var item=Number (prompt("enter item"));
                a.push(item);
                break;        
        case 2: var item = a.pop();
                console.log("deleted item is "+item);
                break;
        case 3: console.log(a);
                break;
        case 4: var item= Number(prompt("enter item"));
                a.unshift(item);
                break;
        case 5: var item = a.shift();
                console.log("deleted item is "+item);
                break;             
        case 6: console.log("bye-bye");
                break;


    }
}