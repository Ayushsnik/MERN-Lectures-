var a =["shawarma","pavbhaji","#biryani","vadapav"];
var regex= /^[A-Za-z]+$/
/*a.forEach(
  function kaalu(element,index,a)///call back function can have 3 parameter .callback, index, aur pura ka pura array
  {
    console.log(element+" "+index+" "+a);
  } 


);*/
a.forEach(
    function kaalu(element){
        if(regex.test(element))
        {
            console.log(element+" is valid");
        }
        else{
            console.log(element+"is invalid");
        }
    }
);