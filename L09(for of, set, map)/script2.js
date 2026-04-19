var s1 = prompt("enter string");
var m = new Map();
var a1 = s1.split(" ");
for(let ditto of a1)
{
    if(m.has(ditto))
    {
        let current = m.get(ditto);
        m.set(ditto,++current);

    }
    else
    {
        m.set(ditto,1);

    }
}
console.log(m);