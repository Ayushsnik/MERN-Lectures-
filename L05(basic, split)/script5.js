var s1= prompt("enter string 1");
var s2= prompt("enter string 2");
s1=s1.split('').sort().join('');
s2=s2.split('').sort().join('');
if (s1===s2)
{
    console.log("the strings are anagram");

}
else 
{
    console.log("the strings are not anagram");
}