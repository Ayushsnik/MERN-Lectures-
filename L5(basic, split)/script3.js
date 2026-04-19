var s1= prompt("enter string");
s1= s1.toLowerCase()
var count=0;
var i=0;
while(i<s1.length)
{
    if(s1.charAt(i)==='a'||s1.charAt(i)==='e'||s1.charAt(i)==='i'||s1.charAt(i)==='o'||s1.charAt(i)==='u')
    {
        count ++;
    }
    i++;
}
console.log("number of vowels are " +count);
