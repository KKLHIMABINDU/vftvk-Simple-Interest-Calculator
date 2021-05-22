function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
document.getElementById("result").innerHTML="<br\>If ypu deposit  <mark>"+principal+"</mark>\<br\>at an interest of  <mark>"+rate+"</mark>%\<br\> You will receive an amount of  <mark>"+interest+"</mark>,\<br\>in the year  <mark>"+year+"</mark>\<br\>"   
}
function inputfun(){
var numInput = document.getElementById("principal").value;
if(Math.sign(numInput) === -1 || numInput == 0){
    alert("Enter only positive numbers");
    window.location.reload(true);
}        
}