var a =[10,20,30,40];
// for(let ditto of a.keys())
// {
//     console.log(ditto)
// }
var c= a.reduce(
    function kaalu(jholi,element)
    {
        jholi=jholi+element;
        return jholi;
    }
);
console.log(c);
console.log(typeof c);