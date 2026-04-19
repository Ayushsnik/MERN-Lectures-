var a =[12,15,16,345,46,7,855,34,646,35,75,457,35,7,85];
var b= a.filter(
    function kaalu(element)
    {
        if(element>18)
        {
            return element;
        }
    }
);
console.log(b);