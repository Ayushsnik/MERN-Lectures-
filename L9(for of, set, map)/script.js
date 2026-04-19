var a1= new Set();
var ch=0;

while(ch!==4)
{
    ch= Number(prompt("1.Add\n2.Delete\n3.display\n4.Exit"));
    switch(ch)
    {
        case 1 : var item = prompt("Enter name");
                 if(a1.has(item))
                 {
                    console.log("duplicate");
                 }
                 a1.add(item);
                 break;
        
        case 2 : var item = prompt("enter name to delete");
                 if(a1.has((item)))   
                 {
                     a1.delete(item);
                 }    
                 else
                 {
                     console.log("nahi hai");
                 }
                 break;
        case 3 : console.log(a1);
                 break;   
        case 4 : console.log("Exit");
                break;   
    }
}
