const getColor= () =>{
    const randomNumber = Math.floor(Math.random()*1700000);
    const hex="#"+randomNumber.toString(16);
    document.body.style.backgroundColor=hex;
    document.getElementById("ColorCode").innerHTML=hex;
}
var randomValue=document.getElementById("btn").addEventListener(
    "click",getColor
) 

getColor();