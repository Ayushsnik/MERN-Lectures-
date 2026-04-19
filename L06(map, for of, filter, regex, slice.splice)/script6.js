var a =["shaWarma","pAVbhaji","biRYani","vaDapAv"];
var b =a.map(
    function kaalu(element)
    {
        var s1=element.slice(0,1);
        s1=s1.toUpperCase();
        var s2=element.slice(1);
        s2=s2.toLowerCase();
        element=s1+s2;
        return element;
     }
);
console.log(b);

